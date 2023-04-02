var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_ADMINISTRASIKECAMATAN_AR_50K_1 = new ol.format.GeoJSON();
var features_ADMINISTRASIKECAMATAN_AR_50K_1 = format_ADMINISTRASIKECAMATAN_AR_50K_1.readFeatures(json_ADMINISTRASIKECAMATAN_AR_50K_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ADMINISTRASIKECAMATAN_AR_50K_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ADMINISTRASIKECAMATAN_AR_50K_1.addFeatures(features_ADMINISTRASIKECAMATAN_AR_50K_1);
var lyr_ADMINISTRASIKECAMATAN_AR_50K_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ADMINISTRASIKECAMATAN_AR_50K_1, 
                style: style_ADMINISTRASIKECAMATAN_AR_50K_1,
                interactive: true,
                title: '<img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_1.png" /> ADMINISTRASIKECAMATAN_AR_50K'
            });
var format_AGRIKEBUN_AR_50K_2 = new ol.format.GeoJSON();
var features_AGRIKEBUN_AR_50K_2 = format_AGRIKEBUN_AR_50K_2.readFeatures(json_AGRIKEBUN_AR_50K_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AGRIKEBUN_AR_50K_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AGRIKEBUN_AR_50K_2.addFeatures(features_AGRIKEBUN_AR_50K_2);
var lyr_AGRIKEBUN_AR_50K_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AGRIKEBUN_AR_50K_2, 
                style: style_AGRIKEBUN_AR_50K_2,
                interactive: true,
                title: '<img src="styles/legend/AGRIKEBUN_AR_50K_2.png" /> AGRIKEBUN_AR_50K'
            });
var format_SUNGAI_AR_50K_3 = new ol.format.GeoJSON();
var features_SUNGAI_AR_50K_3 = format_SUNGAI_AR_50K_3.readFeatures(json_SUNGAI_AR_50K_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SUNGAI_AR_50K_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SUNGAI_AR_50K_3.addFeatures(features_SUNGAI_AR_50K_3);
var lyr_SUNGAI_AR_50K_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SUNGAI_AR_50K_3, 
                style: style_SUNGAI_AR_50K_3,
                interactive: true,
                title: '<img src="styles/legend/SUNGAI_AR_50K_3.png" /> SUNGAI_AR_50K'
            });
var format_BANGUNAN_AR_50K_4 = new ol.format.GeoJSON();
var features_BANGUNAN_AR_50K_4 = format_BANGUNAN_AR_50K_4.readFeatures(json_BANGUNAN_AR_50K_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BANGUNAN_AR_50K_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BANGUNAN_AR_50K_4.addFeatures(features_BANGUNAN_AR_50K_4);
var lyr_BANGUNAN_AR_50K_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BANGUNAN_AR_50K_4, 
                style: style_BANGUNAN_AR_50K_4,
                interactive: true,
                title: '<img src="styles/legend/BANGUNAN_AR_50K_4.png" /> BANGUNAN_AR_50K'
            });
var format_INDUSTRI_AR_50K_5 = new ol.format.GeoJSON();
var features_INDUSTRI_AR_50K_5 = format_INDUSTRI_AR_50K_5.readFeatures(json_INDUSTRI_AR_50K_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_INDUSTRI_AR_50K_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_INDUSTRI_AR_50K_5.addFeatures(features_INDUSTRI_AR_50K_5);
var lyr_INDUSTRI_AR_50K_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_INDUSTRI_AR_50K_5, 
                style: style_INDUSTRI_AR_50K_5,
                interactive: true,
                title: '<img src="styles/legend/INDUSTRI_AR_50K_5.png" /> INDUSTRI_AR_50K'
            });
var format_ADMINISTRASI_LN_50K_6 = new ol.format.GeoJSON();
var features_ADMINISTRASI_LN_50K_6 = format_ADMINISTRASI_LN_50K_6.readFeatures(json_ADMINISTRASI_LN_50K_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ADMINISTRASI_LN_50K_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ADMINISTRASI_LN_50K_6.addFeatures(features_ADMINISTRASI_LN_50K_6);
var lyr_ADMINISTRASI_LN_50K_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ADMINISTRASI_LN_50K_6, 
                style: style_ADMINISTRASI_LN_50K_6,
                interactive: true,
                title: '<img src="styles/legend/ADMINISTRASI_LN_50K_6.png" /> ADMINISTRASI_LN_50K'
            });
var format_JALAN_LN_50K_7 = new ol.format.GeoJSON();
var features_JALAN_LN_50K_7 = format_JALAN_LN_50K_7.readFeatures(json_JALAN_LN_50K_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JALAN_LN_50K_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JALAN_LN_50K_7.addFeatures(features_JALAN_LN_50K_7);
var lyr_JALAN_LN_50K_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_JALAN_LN_50K_7, 
                style: style_JALAN_LN_50K_7,
                interactive: true,
                title: '<img src="styles/legend/JALAN_LN_50K_7.png" /> JALAN_LN_50K'
            });
var format_LAYANANKESEHATAN_PT_50K_8 = new ol.format.GeoJSON();
var features_LAYANANKESEHATAN_PT_50K_8 = format_LAYANANKESEHATAN_PT_50K_8.readFeatures(json_LAYANANKESEHATAN_PT_50K_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LAYANANKESEHATAN_PT_50K_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LAYANANKESEHATAN_PT_50K_8.addFeatures(features_LAYANANKESEHATAN_PT_50K_8);
var lyr_LAYANANKESEHATAN_PT_50K_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LAYANANKESEHATAN_PT_50K_8, 
                style: style_LAYANANKESEHATAN_PT_50K_8,
                interactive: true,
                title: '<img src="styles/legend/LAYANANKESEHATAN_PT_50K_8.png" /> LAYANANKESEHATAN_PT_50K'
            });
var format_PENDIDIKAN_PT_50K_9 = new ol.format.GeoJSON();
var features_PENDIDIKAN_PT_50K_9 = format_PENDIDIKAN_PT_50K_9.readFeatures(json_PENDIDIKAN_PT_50K_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PENDIDIKAN_PT_50K_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PENDIDIKAN_PT_50K_9.addFeatures(features_PENDIDIKAN_PT_50K_9);
var lyr_PENDIDIKAN_PT_50K_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PENDIDIKAN_PT_50K_9, 
                style: style_PENDIDIKAN_PT_50K_9,
                interactive: true,
                title: '<img src="styles/legend/PENDIDIKAN_PT_50K_9.png" /> PENDIDIKAN_PT_50K'
            });
var format_BANGUNAN_PT_50K_10 = new ol.format.GeoJSON();
var features_BANGUNAN_PT_50K_10 = format_BANGUNAN_PT_50K_10.readFeatures(json_BANGUNAN_PT_50K_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BANGUNAN_PT_50K_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BANGUNAN_PT_50K_10.addFeatures(features_BANGUNAN_PT_50K_10);
var lyr_BANGUNAN_PT_50K_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BANGUNAN_PT_50K_10, 
                style: style_BANGUNAN_PT_50K_10,
                interactive: true,
                title: '<img src="styles/legend/BANGUNAN_PT_50K_10.png" /> BANGUNAN_PT_50K'
            });
var format_PEMERINTAHAN_PT_50K_11 = new ol.format.GeoJSON();
var features_PEMERINTAHAN_PT_50K_11 = format_PEMERINTAHAN_PT_50K_11.readFeatures(json_PEMERINTAHAN_PT_50K_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PEMERINTAHAN_PT_50K_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PEMERINTAHAN_PT_50K_11.addFeatures(features_PEMERINTAHAN_PT_50K_11);
var lyr_PEMERINTAHAN_PT_50K_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PEMERINTAHAN_PT_50K_11, 
                style: style_PEMERINTAHAN_PT_50K_11,
                interactive: true,
                title: '<img src="styles/legend/PEMERINTAHAN_PT_50K_11.png" /> PEMERINTAHAN_PT_50K'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_ADMINISTRASIKECAMATAN_AR_50K_1.setVisible(true);lyr_AGRIKEBUN_AR_50K_2.setVisible(true);lyr_SUNGAI_AR_50K_3.setVisible(true);lyr_BANGUNAN_AR_50K_4.setVisible(true);lyr_INDUSTRI_AR_50K_5.setVisible(true);lyr_ADMINISTRASI_LN_50K_6.setVisible(true);lyr_JALAN_LN_50K_7.setVisible(true);lyr_LAYANANKESEHATAN_PT_50K_8.setVisible(true);lyr_PENDIDIKAN_PT_50K_9.setVisible(true);lyr_BANGUNAN_PT_50K_10.setVisible(true);lyr_PEMERINTAHAN_PT_50K_11.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_ADMINISTRASIKECAMATAN_AR_50K_1,lyr_AGRIKEBUN_AR_50K_2,lyr_SUNGAI_AR_50K_3,lyr_BANGUNAN_AR_50K_4,lyr_INDUSTRI_AR_50K_5,lyr_ADMINISTRASI_LN_50K_6,lyr_JALAN_LN_50K_7,lyr_LAYANANKESEHATAN_PT_50K_8,lyr_PENDIDIKAN_PT_50K_9,lyr_BANGUNAN_PT_50K_10,lyr_PEMERINTAHAN_PT_50K_11];
lyr_ADMINISTRASIKECAMATAN_AR_50K_1.set('fieldAliases', {'KDPPUM': 'KDPPUM', 'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'KDPBPS': 'KDPBPS', 'FCODE': 'FCODE', 'LUASWH': 'LUASWH', 'UUPP': 'UUPP', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDBBPS': 'KDBBPS', 'KDBPUM': 'KDBPUM', 'WADMKD': 'WADMKD', 'WIADKD': 'WIADKD', 'WADMKC': 'WADMKC', 'WIADKC': 'WIADKC', 'WADMKK': 'WADMKK', 'WIADKK': 'WIADKK', 'WADMPR': 'WADMPR', 'WIADPR': 'WIADPR', 'TIPADM': 'TIPADM', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_AGRIKEBUN_AR_50K_2.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'JNSKBN': 'JNSKBN', 'FCODE': 'FCODE', 'PUDATE': 'PUDATE', 'AQDATE': 'AQDATE', 'REMARK': 'REMARK', 'KODLCO': 'KODLCO', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_SUNGAI_AR_50K_3.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'JNSSNG': 'JNSSNG', 'KLSSNG': 'KLSSNG', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'NAMWS': 'NAMWS', 'NAMDAS': 'NAMDAS', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_BANGUNAN_AR_50K_4.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_INDUSTRI_AR_50K_5.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'LUAS': 'LUAS', 'KLSBBK': 'KLSBBK', 'KLSTKI': 'KLSTKI', 'KLSPRD': 'KLSPRD', 'KLSBMT': 'KLSBMT', 'KLSLOK': 'KLSLOK', 'KLSPRO': 'KLSPRO', 'KLSKOM': 'KLSKOM', 'KLSMOD': 'KLSMOD', 'KLSJNS': 'KLSJNS', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_ADMINISTRASI_LN_50K_6.set('fieldAliases', {'KARKTR': 'KARKTR', 'STSBTS': 'STSBTS', 'FCODE': 'FCODE', 'KELAS': 'KELAS', 'UUPP': 'UUPP', 'LOKASI': 'LOKASI', 'REMARK': 'REMARK', 'NAMOBJ': 'NAMOBJ', 'ADMIN1': 'ADMIN1', 'ADMIN2': 'ADMIN2', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'WAKLD1': 'WAKLD1', 'WAKLD2': 'WAKLD2', 'WADKC1': 'WADKC1', 'WADKC2': 'WADKC2', 'WAKBK1': 'WAKBK1', 'WAKBK2': 'WAKBK2', 'WAPRO1': 'WAPRO1', 'WAPRO2': 'WAPRO2', 'TIPTBT': 'TIPTBT', 'PJGBTS': 'PJGBTS', 'KLBADM': 'KLBADM', 'TIPLOK': 'TIPLOK', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_JALAN_LN_50K_7.set('fieldAliases', {'NAMRJL': 'NAMRJL', 'KONRJL': 'KONRJL', 'MATRJL': 'MATRJL', 'FGSRJL': 'FGSRJL', 'UTKRJL': 'UTKRJL', 'TOLRJL': 'TOLRJL', 'WLYRJL': 'WLYRJL', 'AUTRJL': 'AUTRJL', 'KLSRJL': 'KLSRJL', 'SPCRJL': 'SPCRJL', 'JPARJL': 'JPARJL', 'ARHRJL': 'ARHRJL', 'STARJL': 'STARJL', 'KLLRJL': 'KLLRJL', 'MEDRJL': 'MEDRJL', 'LOCRJL': 'LOCRJL', 'JARRJL': 'JARRJL', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_LAYANANKESEHATAN_PT_50K_8.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'LCODE': 'LCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'METADATA': 'METADATA', 'LKALMT': 'LKALMT', 'TPLYST': 'TPLYST', });
lyr_PENDIDIKAN_PT_50K_9.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'LUAS': 'LUAS', 'KATPDK': 'KATPDK', 'JLPDDK': 'JLPDDK', 'FGGPDK': 'FGGPDK', 'REMARK': 'REMARK', 'FCODE': 'FCODE', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'JJGPDF': 'JJGPDF', 'JNSPDL': 'JNSPDL', });
lyr_BANGUNAN_PT_50K_10.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', });
lyr_PEMERINTAHAN_PT_50K_11.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FGSGOV': 'FGSGOV', 'LUAS': 'LUAS', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', });
lyr_ADMINISTRASIKECAMATAN_AR_50K_1.set('fieldImages', {'KDPPUM': '', 'NAMOBJ': '', 'REMARK': '', 'KDPBPS': '', 'FCODE': '', 'LUASWH': '', 'UUPP': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'KDEBPS': '', 'KDEPUM': '', 'KDCBPS': '', 'KDCPUM': '', 'KDBBPS': '', 'KDBPUM': '', 'WADMKD': '', 'WIADKD': '', 'WADMKC': '', 'WIADKC': '', 'WADMKK': '', 'WIADKK': '', 'WADMPR': '', 'WIADPR': '', 'TIPADM': '', 'SHAPE_Leng': '', 'SHAPE_Area': '', });
lyr_AGRIKEBUN_AR_50K_2.set('fieldImages', {'NAMOBJ': '', 'JNSKBN': '', 'FCODE': '', 'PUDATE': '', 'AQDATE': '', 'REMARK': '', 'KODLCO': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'SHAPE_Leng': '', 'SHAPE_Area': '', });
lyr_SUNGAI_AR_50K_3.set('fieldImages', {'NAMOBJ': '', 'JNSSNG': '', 'KLSSNG': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'NAMWS': '', 'NAMDAS': '', 'SHAPE_Leng': '', 'SHAPE_Area': '', });
lyr_BANGUNAN_AR_50K_4.set('fieldImages', {'NAMOBJ': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'SHAPE_Leng': '', 'SHAPE_Area': '', });
lyr_INDUSTRI_AR_50K_5.set('fieldImages', {'NAMOBJ': '', 'LUAS': '', 'KLSBBK': '', 'KLSTKI': '', 'KLSPRD': '', 'KLSBMT': '', 'KLSLOK': '', 'KLSPRO': '', 'KLSKOM': '', 'KLSMOD': '', 'KLSJNS': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'SHAPE_Leng': '', 'SHAPE_Area': '', });
lyr_ADMINISTRASI_LN_50K_6.set('fieldImages', {'KARKTR': '', 'STSBTS': '', 'FCODE': '', 'KELAS': '', 'UUPP': '', 'LOKASI': '', 'REMARK': '', 'NAMOBJ': '', 'ADMIN1': '', 'ADMIN2': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'WAKLD1': '', 'WAKLD2': '', 'WADKC1': '', 'WADKC2': '', 'WAKBK1': '', 'WAKBK2': '', 'WAPRO1': '', 'WAPRO2': '', 'TIPTBT': '', 'PJGBTS': '', 'KLBADM': '', 'TIPLOK': '', 'SHAPE_Leng': '', });
lyr_JALAN_LN_50K_7.set('fieldImages', {'NAMRJL': '', 'KONRJL': '', 'MATRJL': '', 'FGSRJL': '', 'UTKRJL': '', 'TOLRJL': '', 'WLYRJL': '', 'AUTRJL': '', 'KLSRJL': '', 'SPCRJL': '', 'JPARJL': '', 'ARHRJL': '', 'STARJL': '', 'KLLRJL': '', 'MEDRJL': '', 'LOCRJL': '', 'JARRJL': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'SHAPE_Leng': '', });
lyr_LAYANANKESEHATAN_PT_50K_8.set('fieldImages', {'NAMOBJ': '', 'FCODE': '', 'LCODE': '', 'REMARK': '', 'SRS_ID': '', 'METADATA': '', 'LKALMT': '', 'TPLYST': '', });
lyr_PENDIDIKAN_PT_50K_9.set('fieldImages', {'NAMOBJ': '', 'LUAS': '', 'KATPDK': '', 'JLPDDK': '', 'FGGPDK': '', 'REMARK': '', 'FCODE': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'JJGPDF': '', 'JNSPDL': '', });
lyr_BANGUNAN_PT_50K_10.set('fieldImages', {'NAMOBJ': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', });
lyr_PEMERINTAHAN_PT_50K_11.set('fieldImages', {'NAMOBJ': '', 'FGSGOV': '', 'LUAS': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', });
lyr_ADMINISTRASIKECAMATAN_AR_50K_1.set('fieldLabels', {'KDPPUM': 'no label', 'NAMOBJ': 'inline label', 'REMARK': 'inline label', 'KDPBPS': 'no label', 'FCODE': 'no label', 'LUASWH': 'no label', 'UUPP': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDBBPS': 'no label', 'KDBPUM': 'no label', 'WADMKD': 'no label', 'WIADKD': 'no label', 'WADMKC': 'inline label', 'WIADKC': 'no label', 'WADMKK': 'inline label', 'WIADKK': 'no label', 'WADMPR': 'inline label', 'WIADPR': 'no label', 'TIPADM': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_AGRIKEBUN_AR_50K_2.set('fieldLabels', {'NAMOBJ': 'no label', 'JNSKBN': 'no label', 'FCODE': 'no label', 'PUDATE': 'no label', 'AQDATE': 'no label', 'REMARK': 'no label', 'KODLCO': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_SUNGAI_AR_50K_3.set('fieldLabels', {'NAMOBJ': 'no label', 'JNSSNG': 'no label', 'KLSSNG': 'no label', 'FCODE': 'no label', 'REMARK': 'inline label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'NAMWS': 'no label', 'NAMDAS': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_BANGUNAN_AR_50K_4.set('fieldLabels', {'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_INDUSTRI_AR_50K_5.set('fieldLabels', {'NAMOBJ': 'no label', 'LUAS': 'no label', 'KLSBBK': 'no label', 'KLSTKI': 'no label', 'KLSPRD': 'no label', 'KLSBMT': 'no label', 'KLSLOK': 'no label', 'KLSPRO': 'no label', 'KLSKOM': 'no label', 'KLSMOD': 'no label', 'KLSJNS': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_ADMINISTRASI_LN_50K_6.set('fieldLabels', {'KARKTR': 'no label', 'STSBTS': 'no label', 'FCODE': 'no label', 'KELAS': 'no label', 'UUPP': 'no label', 'LOKASI': 'no label', 'REMARK': 'inline label', 'NAMOBJ': 'no label', 'ADMIN1': 'no label', 'ADMIN2': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'WAKLD1': 'no label', 'WAKLD2': 'no label', 'WADKC1': 'no label', 'WADKC2': 'no label', 'WAKBK1': 'no label', 'WAKBK2': 'no label', 'WAPRO1': 'no label', 'WAPRO2': 'no label', 'TIPTBT': 'no label', 'PJGBTS': 'no label', 'KLBADM': 'no label', 'TIPLOK': 'no label', 'SHAPE_Leng': 'no label', });
lyr_JALAN_LN_50K_7.set('fieldLabels', {'NAMRJL': 'no label', 'KONRJL': 'no label', 'MATRJL': 'no label', 'FGSRJL': 'no label', 'UTKRJL': 'no label', 'TOLRJL': 'no label', 'WLYRJL': 'no label', 'AUTRJL': 'no label', 'KLSRJL': 'no label', 'SPCRJL': 'no label', 'JPARJL': 'no label', 'ARHRJL': 'no label', 'STARJL': 'no label', 'KLLRJL': 'no label', 'MEDRJL': 'no label', 'LOCRJL': 'no label', 'JARRJL': 'no label', 'FCODE': 'no label', 'REMARK': 'inline label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'SHAPE_Leng': 'no label', });
lyr_LAYANANKESEHATAN_PT_50K_8.set('fieldLabels', {'NAMOBJ': 'inline label', 'FCODE': 'no label', 'LCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'METADATA': 'no label', 'LKALMT': 'no label', 'TPLYST': 'no label', });
lyr_PENDIDIKAN_PT_50K_9.set('fieldLabels', {'NAMOBJ': 'inline label', 'LUAS': 'no label', 'KATPDK': 'no label', 'JLPDDK': 'no label', 'FGGPDK': 'no label', 'REMARK': 'inline label', 'FCODE': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'JJGPDF': 'no label', 'JNSPDL': 'no label', });
lyr_BANGUNAN_PT_50K_10.set('fieldLabels', {'NAMOBJ': 'inline label', 'FCODE': 'no label', 'REMARK': 'inline label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', });
lyr_PEMERINTAHAN_PT_50K_11.set('fieldLabels', {'NAMOBJ': 'no label', 'FGSGOV': 'no label', 'LUAS': 'no label', 'FCODE': 'no label', 'REMARK': 'inline label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', });
lyr_PEMERINTAHAN_PT_50K_11.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});