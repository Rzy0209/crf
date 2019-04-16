package com.wn.sjpt.crf.util;


import org.elasticsearch.client.Client;
import org.elasticsearch.client.transport.TransportClient;
import org.elasticsearch.common.settings.Settings;
import org.elasticsearch.common.transport.TransportAddress;
import org.elasticsearch.transport.client.PreBuiltTransportClient;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import java.net.InetAddress;
import java.net.UnknownHostException;

/**
 * elasticsearch工具类，获取ES连接
 *
 * @author mengpengwei
 */
@Component
public class EsUtil {

    /**
     * TransportClient
     */
    private static TransportClient client = null;

    /**
     * 集群名称
     */
    @Value("${spring.data.elasticsearch.cluster-name:\"es-5.0-test\"}")
    private String clusterName;
    /**
     * 就诊记录 索引名称
     */
    @Value("${spring.data.elasticsearch.indices.crf.index:wn-crf}")
    public String indexName;

    public static String CONSTANT_ES_JZJL_INDEX_NAME="wn-crf";

    public static String CONSTANT_ES_JZJL_INDEX_TYPE = "data";

    /**
     * 地址
     */
    @Value("${spring.data.elasticsearch.cluster-nodes:\"172.20.10.11:9300\"}")
    private String clusterNodes;
    /**
     * 获取index
     */
    @Autowired
    public void getIndex(){
         CONSTANT_ES_JZJL_INDEX_NAME = indexName;
    }

    /**
     * 获取Client,ES连接
     *
     * @return
     */
    public Client getTransportClient() {
        try {
            if (client == null || ((TransportClient) client).connectedNodes()
                    .isEmpty()) {
                Settings settings = Settings.builder()
                        .put( "cluster.name", clusterName )
                        .build();
                String[] nodes = clusterNodes.split( "," );
                client = new PreBuiltTransportClient( settings );
                for (String node : nodes) {
                    String[] nodeArray = node.split( ":" );
                    String host = nodeArray[0];
                    Integer port = Integer.parseInt( nodeArray[1] );
                    client.addTransportAddress( new TransportAddress( InetAddress.getByName( host ), port ) );
                }
            }
        } catch (UnknownHostException e) {
            e.printStackTrace();
        }
        return client;
    }

    /**
     * 关闭ESClient
     *
     * @param client
     */
    public static void closeClient(Client client) {
        if (client != null) {
            client.close();
        }
    }
}
