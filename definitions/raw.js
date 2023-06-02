ingestion.ingest(
    'HC_ext_clientes2', 
    'raw', 
    ['raw'], 
    'parquet', 
    'gs://wks_data/raw/clientes/clientes.parquet'
);


ingestion.ingest(
    'HC_ext_enderecos2', 
    'raw', 
    ['raw'], 
    'parquet', 
    'gs://wks_data/raw/enderecos/enderecos.parquet'
);


ingestion.ingest(
    'HC_ext_itens_produtos_pedidos2', 
    'raw', 
    ['raw'], 
    'parquet', 
    'gs://wks_data/raw/itens_produtos_pedidos/itens_produtos_pedidos.parquet'
);
