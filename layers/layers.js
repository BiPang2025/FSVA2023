var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_D_PRIOKOMP_1 = new ol.format.GeoJSON();
var features_D_PRIOKOMP_1 = format_D_PRIOKOMP_1.readFeatures(json_D_PRIOKOMP_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_D_PRIOKOMP_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_D_PRIOKOMP_1.addFeatures(features_D_PRIOKOMP_1);
var lyr_D_PRIOKOMP_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_D_PRIOKOMP_1, 
                style: style_D_PRIOKOMP_1,
                popuplayertitle: 'D_PRIO KOMP',
                interactive: true,
    title: 'D_PRIO KOMP<br />\
    <img src="styles/legend/D_PRIOKOMP_1_0.png" /> Prioritas 1<br />\
    <img src="styles/legend/D_PRIOKOMP_1_1.png" /> Prioritas 2<br />\
    <img src="styles/legend/D_PRIOKOMP_1_2.png" /> Prioritas 3<br />\
    <img src="styles/legend/D_PRIOKOMP_1_3.png" /> Prioritas 4<br />\
    <img src="styles/legend/D_PRIOKOMP_1_4.png" /> Prioritas 5<br />\
    <img src="styles/legend/D_PRIOKOMP_1_5.png" /> Prioritas 6<br />'
        });
var format_BatasDesa_2 = new ol.format.GeoJSON();
var features_BatasDesa_2 = format_BatasDesa_2.readFeatures(json_BatasDesa_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BatasDesa_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BatasDesa_2.addFeatures(features_BatasDesa_2);
var lyr_BatasDesa_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BatasDesa_2, 
                style: style_BatasDesa_2,
                popuplayertitle: 'Batas Desa',
                interactive: true,
                title: '<img src="styles/legend/BatasDesa_2.png" /> Batas Desa'
            });
var format_BatasKecamatan_3 = new ol.format.GeoJSON();
var features_BatasKecamatan_3 = format_BatasKecamatan_3.readFeatures(json_BatasKecamatan_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BatasKecamatan_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BatasKecamatan_3.addFeatures(features_BatasKecamatan_3);
var lyr_BatasKecamatan_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BatasKecamatan_3, 
                style: style_BatasKecamatan_3,
                popuplayertitle: 'Batas Kecamatan',
                interactive: true,
                title: '<img src="styles/legend/BatasKecamatan_3.png" /> Batas Kecamatan'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_D_PRIOKOMP_1.setVisible(true);lyr_BatasDesa_2.setVisible(true);lyr_BatasKecamatan_3.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_D_PRIOKOMP_1,lyr_BatasDesa_2,lyr_BatasKecamatan_3];
lyr_D_PRIOKOMP_1.set('fieldAliases', {'fid': 'fid', 'Provinsi': 'Provinsi', 'Kabkot': 'Kabkot', 'Kecamatan': 'Kecamatan', 'Desa': 'Desa', 'ID_Kab': 'ID_Kab', 'ID_Kec': 'ID_Kec', 'ID_Desa': 'ID_Desa', 'ID_BPS': 'ID_BPS', 'D_No.': 'D_No.', 'D_Nama Kec': 'D_Nama Kec', 'D_Kode Kec': 'D_Kode Kec', 'D_Nama Kelurahan': 'D_Nama Kelurahan', 'D_1. P.Lahan': 'D_1. P.Lahan', 'D_2. P.Sarana': 'D_2. P.Sarana', 'D_3. P.Tdk Sejah': 'D_3. P.Tdk Sejah', 'D_4. P.Jalan': 'D_4. P.Jalan', 'D_5. P.NoWater': 'D_5. P.NoWater', 'D_6. P.Tenkes': 'D_6. P.Tenkes', 'D_INDEKS KOM': 'D_INDEKS KOM', 'D_PERINGKAT': 'D_PERINGKAT', 'D_PRIO KOMP': 'D_PRIO KOMP', });
lyr_BatasDesa_2.set('fieldAliases', {'fid': 'fid', 'Provinsi': 'Provinsi', 'Kabkot': 'Kabkot', 'Kecamatan': 'Kecamatan', 'Desa': 'Desa', 'ID_Kab': 'ID_Kab', 'ID_Kec': 'ID_Kec', 'ID_Desa': 'ID_Desa', 'ID_BPS': 'ID_BPS', });
lyr_BatasKecamatan_3.set('fieldAliases', {'fid': 'fid', 'Provinsi': 'Provinsi', 'Kabkot': 'Kabkot', 'Kecamatan': 'Kecamatan', 'kec': 'kec', 'ID_Kec': 'ID_Kec', 'Kode_Kec': 'Kode_Kec', });
lyr_D_PRIOKOMP_1.set('fieldImages', {'fid': 'TextEdit', 'Provinsi': 'TextEdit', 'Kabkot': 'TextEdit', 'Kecamatan': 'TextEdit', 'Desa': 'TextEdit', 'ID_Kab': 'Range', 'ID_Kec': 'Range', 'ID_Desa': 'TextEdit', 'ID_BPS': 'TextEdit', 'D_No.': 'TextEdit', 'D_Nama Kec': 'TextEdit', 'D_Kode Kec': 'TextEdit', 'D_Nama Kelurahan': 'TextEdit', 'D_1. P.Lahan': 'Range', 'D_2. P.Sarana': 'Range', 'D_3. P.Tdk Sejah': 'Range', 'D_4. P.Jalan': 'Range', 'D_5. P.NoWater': 'Range', 'D_6. P.Tenkes': 'Range', 'D_INDEKS KOM': 'TextEdit', 'D_PERINGKAT': 'Range', 'D_PRIO KOMP': 'Range', });
lyr_BatasDesa_2.set('fieldImages', {'fid': 'TextEdit', 'Provinsi': 'TextEdit', 'Kabkot': 'TextEdit', 'Kecamatan': 'TextEdit', 'Desa': 'TextEdit', 'ID_Kab': 'Range', 'ID_Kec': 'Range', 'ID_Desa': 'TextEdit', 'ID_BPS': 'TextEdit', });
lyr_BatasKecamatan_3.set('fieldImages', {'fid': 'TextEdit', 'Provinsi': 'TextEdit', 'Kabkot': 'TextEdit', 'Kecamatan': 'TextEdit', 'kec': 'TextEdit', 'ID_Kec': 'TextEdit', 'Kode_Kec': 'TextEdit', });
lyr_D_PRIOKOMP_1.set('fieldLabels', {'fid': 'hidden field', 'Provinsi': 'hidden field', 'Kabkot': 'hidden field', 'Kecamatan': 'inline label - visible with data', 'Desa': 'inline label - visible with data', 'ID_Kab': 'hidden field', 'ID_Kec': 'hidden field', 'ID_Desa': 'hidden field', 'ID_BPS': 'hidden field', 'D_No.': 'hidden field', 'D_Nama Kec': 'hidden field', 'D_Kode Kec': 'hidden field', 'D_Nama Kelurahan': 'hidden field', 'D_1. P.Lahan': 'inline label - visible with data', 'D_2. P.Sarana': 'inline label - visible with data', 'D_3. P.Tdk Sejah': 'inline label - visible with data', 'D_4. P.Jalan': 'inline label - visible with data', 'D_5. P.NoWater': 'inline label - visible with data', 'D_6. P.Tenkes': 'inline label - visible with data', 'D_INDEKS KOM': 'inline label - visible with data', 'D_PERINGKAT': 'inline label - visible with data', 'D_PRIO KOMP': 'inline label - visible with data', });
lyr_BatasDesa_2.set('fieldLabels', {'fid': 'hidden field', 'Provinsi': 'hidden field', 'Kabkot': 'hidden field', 'Kecamatan': 'hidden field', 'Desa': 'inline label - visible with data', 'ID_Kab': 'hidden field', 'ID_Kec': 'hidden field', 'ID_Desa': 'hidden field', 'ID_BPS': 'hidden field', });
lyr_BatasKecamatan_3.set('fieldLabels', {'fid': 'hidden field', 'Provinsi': 'hidden field', 'Kabkot': 'hidden field', 'Kecamatan': 'inline label - visible with data', 'kec': 'hidden field', 'ID_Kec': 'hidden field', 'Kode_Kec': 'hidden field', });
lyr_BatasKecamatan_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});