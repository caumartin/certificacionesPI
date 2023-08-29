let proveedores=JSON.parse(JSON.stringify(
    {
    "NPAyProveedor": [
      {
        "Proveedor": 1014426,
        "Contratista": "3GLA Networks",
        "NPA": 7600017931
      },
      {
        "Proveedor": 1015084,
        "Contratista": "Pronetba",
        "NPA": 7600017935
      },
      {
        "Proveedor": 1015969,
        "Contratista": "ANNESE VICTOR ANGEL",
        "NPA": 7600017921
      },
      {
        "Proveedor": 1034690,
        "Contratista": "Lizarraga Carolina",
        "NPA": 7600017929
      },
      {
        "Proveedor": 1016685,
        "Contratista": "Wilion Conte y Asociados",
        "NPA": 7600017925
      },
      {
        "Proveedor": 1016859,
        "Contratista": "TAILORED SERVICES PROYECTOS ESPECIA",
        "NPA": 7600017930
      },
      {
        "Proveedor": "1016936",
        "Contratista": "Pittella E Hijos S.A.",
        "NPA": 7600017924
      },
      {
        "Proveedor": 1007735,
        "Contratista": "300 NET",
        "NPA": 7600017934
      },
      {
        "Proveedor": 1013755,
        "Contratista": "Techfar-Tel",
        "NPA": 7600017937
      },
      {
        "Proveedor": 1010502,
        "Contratista": "ElectroTotal",
        "NPA": 7600017936
      }
    ]
  }))

let posiciones=JSON.parse(JSON.stringify(
    {
        "NPAyPosiciones": [
          {
            "Posición": "10",
            "Servicio": "5035295",
            "Descripción": "CERT.ENLACE.FO.PI_DE.72.HASTA.144.PELOS",
            "Precio": 47411.64
          },
          {
            "Posición": "20",
            "Servicio": "5006962",
            "Descripción": "ACONDICIONADO DE LOCAL PLANTA INTERNA",
            "Precio": 610
          },
          {
            "Posición": "30",
            "Servicio": "5006964",
            "Descripción": "ACOPLE CAÑO DAISA 7/8\" SOBRE ALA BJA.",
            "Precio": 1647
          },
          {
            "Posición": "40",
            "Servicio": "5007007",
            "Descripción": "ADIC BJA. ACCESORIOS P/TÉCNICO P/INTERNA",
            "Precio": 0.4
          },
          {
            "Posición": "50",
            "Servicio": "5007020",
            "Descripción": "ADICIONAL CAJA DAISA (TECHO O BAJO PISO)",
            "Precio": 674.66
          },
          {
            "Posición": "60",
            "Servicio": "5007021",
            "Descripción": "ADICIONAL CAÑO DAISA (TECHO O BAJO PISO)",
            "Precio": 1466.44
          },
          {
            "Posición": "70",
            "Servicio": "5007022",
            "Descripción": "ADICIONAL CAÑO DAISA POR BORDEO",
            "Precio": 5152.06
          },
          {
            "Posición": "80",
            "Servicio": "5007025",
            "Descripción": "ADICIONAL INST E IMPACTADO C/ 6 UTP ADIC",
            "Precio": 0.75
          },
          {
            "Posición": "90",
            "Servicio": "5007031",
            "Descripción": "ADICIONAL MULTIPATCH MPO/FO P/INTERNA",
            "Precio": 0.7
          },
          {
            "Posición": "100",
            "Servicio": "5020372",
            "Descripción": "ADICIONAL TRASLADO Y UBICACIÓN DE OBRA",
            "Precio": 1
          },
          {
            "Posición": "110",
            "Servicio": "5007436",
            "Descripción": "ARMADO CAB DE CONEX MINICOAXIL P/INTERNA",
            "Precio": 1144.36
          },
          {
            "Posición": "120",
            "Servicio": "5007437",
            "Descripción": "ARMADO DE CABLE DE CONEX RG-59 P/INTERNA",
            "Precio": 592.92
          },
          {
            "Posición": "130",
            "Servicio": "5007438",
            "Descripción": "ARMADO DE FIBER GUIDE",
            "Precio": 18395.16
          },
          {
            "Posición": "140",
            "Servicio": "5022605",
            "Descripción": "AYUDANTE DE OBRA – PLANTA INTERNA",
            "Precio": 1356.64
          },
          {
            "Posición": "150",
            "Servicio": "5007936",
            "Descripción": "CABLEADO (MAYOR A 10 MM) P/UN Y P/M.",
            "Precio": 812.52
          },
          {
            "Posición": "160",
            "Servicio": "5007938",
            "Descripción": "CABLEADO X METRO INSTALADO 1",
            "Precio": 351.36
          },
          {
            "Posición": "170",
            "Servicio": "5007939",
            "Descripción": "CABLEADO X METRO INSTALADO 2",
            "Precio": 470.92
          },
          {
            "Posición": "180",
            "Servicio": "5007940",
            "Descripción": "CABLEADO X METRO INSTALADO 3 O MAS",
            "Precio": 581.94
          },
          {
            "Posición": "190",
            "Servicio": "5022744",
            "Descripción": "CERTIFICACIÓN ENLACE FO PLANTA INTERNA",
            "Precio": 1193.16
          },
          {
            "Posición": "200",
            "Servicio": "5035294",
            "Descripción": "CERT.ENLACE.FO.PI_HASTA.72.PELOS",
            "Precio": 36470.68
          },
          {
            "Posición": "210",
            "Servicio": "5022743",
            "Descripción": "CERTIFICACIÓN VINCULO FO PLANTA INTERNA",
            "Precio": 910.12
          },
          {
            "Posición": "220",
            "Servicio": "5008280",
            "Descripción": "COLOCAR BASTI VER HD ACTIVO P/INTERNA",
            "Precio": 793
          },
          {
            "Posición": "230",
            "Servicio": "5008281",
            "Descripción": "COLOCAR BASTI VER HD PASIVO P/INTERNA",
            "Precio": 1544.52
          },
          {
            "Posición": "240",
            "Servicio": "5008282",
            "Descripción": "COLOCAR BASTI VERTICAL ACTIVO P/INTERNA",
            "Precio": 325.74
          },
          {
            "Posición": "250",
            "Servicio": "5008283",
            "Descripción": "COLOCAR BASTIDOR HORIZONTAL - P/INTERNA",
            "Precio": 162.26
          },
          {
            "Posición": "260",
            "Servicio": "5008284",
            "Descripción": "COLOCAR BASTIDOR VERTICAL - P/INTERNA",
            "Precio": 325.74
            
          },
          {
            "Posición": "270",
            "Servicio": "5008285",
            "Descripción": "COLOCAR PASIVOS BD - PLANTA INTERNA",
            "Precio": 242.78
            
          },
          {
            "Posición": "280",
            "Servicio": "5008286",
            "Descripción": "COLOCAR PASIVOS HD - PLANTA INTERNA",
            "Precio": 353.8
          },
          {
            "Posición": "290",
            "Servicio": "5008287",
            "Descripción": "COLOCAR SEPARADOR HORIZONTAL P/INTERNA",
            "Precio": 122
          },
          {
            "Posición": "300",
            "Servicio": "5008288",
            "Descripción": "COLOCAR TECHNETIX - PLANTA INTERNA",
            "Precio": 3954.02
          },
          {
            "Posición": "310",
            "Servicio": "5009028",
            "Descripción": "DESMONTE BANDEJA Y ACCESORIOS P/INTERNA",
            "Precio": 2052.04
          },
          {
            "Posición": "320",
            "Servicio": "5009043",
            "Descripción": "DESMONTE INSTALACIONES",
            "Precio": 3711.24
          },
          {
            "Posición": "330",
            "Servicio": "5009050",
            "Descripción": "DESMONTE TENDIDOS",
            "Precio": 3530.68
          },
          {
            "Posición": "340",
            "Servicio": "5009152",
            "Descripción": "DOBLADO DE CAÑO DAISA",
            "Precio": 3528.24
          },
          {
            "Posición": "350",
            "Servicio": "5009222",
            "Descripción": "EMPALME POR FUSIÓN FO EN PLANTA INTERNA",
            "Precio": 1163.88
          },
          {
            "Posición": "360",
            "Servicio": "5010334",
            "Descripción": "INST. 2 CANALES ENERGÍA RACK/CABLE/PAT",
            "Precio": 9110.96
          },
          {
            "Posición": "370",
            "Servicio": "5010335",
            "Descripción": "INST. ACCESORIOS BJA ESCALERA P/INTERNA",
            "Precio": 6234.2
          },
          {
            "Posición": "380",
            "Servicio": "5010336",
            "Descripción": "INST. ACCESORIOS BJA RANURADAS P/INTERNA",
            "Precio": 3878.38
          },
          {
            "Posición": "390",
            "Servicio": "5010337",
            "Descripción": "INST. CAJA DAISA C/DERIVACIÓN PARED",
            "Precio": 2981.68
          },
          {
            "Posición": "400",
            "Servicio": "5010338",
            "Descripción": "INST. CAJA DAISA S/DERIVACIÓN PARED",
            "Precio": 2375.34
          },
          {
            "Posición": "410",
            "Servicio": "5010340",
            "Descripción": "INST. DE BANDEJA ESCALERA P/INTERNA",
            "Precio": 10213.84
          },
          {
            "Posición": "420",
            "Servicio": "5010341",
            "Descripción": "INST. DE BANDEJA RANURADA P/INTERNA",
            "Precio": 4842.18
          },
          {
            "Posición": "430",
            "Servicio": "5010476",
            "Descripción": "INSTALACIÓN BOCA UTP DOBLE",
            "Precio": 4648.2
          },
          {
            "Posición": "440",
            "Servicio": "5010488",
            "Descripción": "INSTALACIÓN CRUZ O T SUSPENDIDA",
            "Precio": 3780.78
          },
          {
            "Posición": "450",
            "Servicio": "5010489",
            "Descripción": "INSTALACIÓN CURVA C/CUPLAS",
            "Precio": 1903.2
          },
          {
            "Posición": "460",
            "Servicio": "5010501",
            "Descripción": "INSTALACIÓN DE CABLECANAL O ZÓCALOCANAL",
            "Precio": 3466.02
          },
          {
            "Posición": "470",
            "Servicio": "5010503",
            "Descripción": "INSTALACIÓN DE CAÑO DAISA RECTO",
            "Precio": 2830.4
          },
          {
            "Posición": "480",
            "Servicio": "5010530",
            "Descripción": "INSTALACIÓN E IMPACTADO DE 6 UTP",
            "Precio": 28489.44
          },
          {
            "Posición": "490",
            "Servicio": "5010544",
            "Descripción": "INSTALACIÓN MULTIPATCH FO (12) P/INTERNA",
            "Precio": 8692.5
          },
          {
            "Posición": "500",
            "Servicio": "5010545",
            "Descripción": "INSTALACIÓN MULTIPATCH MPO(12) P/INTERNA",
            "Precio": 8776.68
          },
          {
            "Posición": "510",
            "Servicio": "5010546",
            "Descripción": "INSTALACIÓN MULTIPATCH MPO(144)P/INTERNA",
            "Precio": 21328.04
          },
          {
            "Posición": "520",
            "Servicio": "5010547",
            "Descripción": "INSTALACIÓN MULTIPATCH MPO(24) P/INTERNA",
            "Precio": 11143.48
          },
          {
            "Posición": "530",
            "Servicio": "5010548",
            "Descripción": "INSTALACIÓN MULTIPATCH MPO(36 )P/INTERNA",
            "Precio": 13601.78
          },
          {
            "Posición": "540",
            "Servicio": "5010549",
            "Descripción": "INSTALACIÓN MULTIPATCH MPO(48) P/INTERNA",
            "Precio": 15468.38
          },
          {
            "Posición": "550",
            "Servicio": "5010550",
            "Descripción": "INSTALACIÓN MULTIPATCH MPO(72) P/INTERNA",
            "Precio": 17524.08
          },
          {
            "Posición": "560",
            "Servicio": "5010569",
            "Descripción": "INSTALACIÓN PATCHERA X JACK",
            "Precio": 1459.12
          },
          {
            "Posición": "570",
            "Servicio": "5010570",
            "Descripción": "INSTALACIÓN PERFIL OLMAR SUSPENDIDO",
            "Precio": 3924.74
          },
          {
            "Posición": "580",
            "Servicio": "5010571",
            "Descripción": "INSTALACIÓN PISO TÉCNICO COMPLETO",
            "Precio": 6572.14
          },
          {
            "Posición": "590",
            "Servicio": "5010578",
            "Descripción": "INSTALACIÓN SENSOR, BOTON, CAMARA, ETC",
            "Precio": 3611.2
          },
          {
            "Posición": "600",
            "Servicio": "5010581",
            "Descripción": "INSTALACIÓN TABLERO CHICO",
            "Precio": 7063.8
          },
          {
            "Posición": "610",
            "Servicio": "5010582",
            "Descripción": "INSTALACIÓN TABLERO GRANDE",
            "Precio": 16703.02
          },
          {
            "Posición": "620",
            "Servicio": "5011220",
            "Descripción": "IZADO DE MATERIALES",
            "Precio": 16975.08
          },
          {
            "Posición": "630",
            "Servicio": "5013579",
            "Descripción": "ORGANIZAR CAB BASTI TECHNETIK P/INTERNA",
            "Precio": 15668.46
          },
          {
            "Posición": "640",
            "Servicio": "5013580",
            "Descripción": "ORGANIZAR CAB BASTI VER ACT P/INTERNA",
            "Precio": 1579.9
          },
          {
            "Posición": "650",
            "Servicio": "5013581",
            "Descripción": "ORGANIZAR CAB BASTI VER HD ACT P/INTERNA",
            "Precio": 7787.26
          },
          {
            "Posición": "660",
            "Servicio": "5013582",
            "Descripción": "ORGANIZAR CAB BASTI VER HD PAS P/INTERNA",
            "Precio": 39424.3
          },
          {
            "Posición": "670",
            "Servicio": "5013583",
            "Descripción": "ORGANIZAR CABLES BASTIDOR HOR P/INTERNA",
            "Precio": 1577.46
          },
          {
            "Posición": "680",
            "Servicio": "5013584",
            "Descripción": "ORGANIZAR CABLES BASTIDOR VER P/INTERNA",
            "Precio": 7926.34
          },
          {
            "Posición": "690",
            "Servicio": "5013752",
            "Descripción": "PASO DE LOSA",
            "Precio": 14463.1
          },
          {
            "Posición": "700",
            "Servicio": "5013753",
            "Descripción": "PASO DE MURO CON BANDEJA",
            "Precio": 8339.92
          },
          {
            "Posición": "710",
            "Servicio": "5013754",
            "Descripción": "PASO DE MURO CON CAÑO",
            "Precio": 3608.76
          },
          {
            "Posición": "720",
            "Servicio": "5013984",
            "Descripción": "PREPARAR ACRÍLICO MATRIZ CMTS P/INTERNA",
            "Precio": 15921
          },
          {
            "Posición": "730",
            "Servicio": "5013985",
            "Descripción": "PREPARAR RACK 1000 MM O MAYOR P/INTERNA",
            "Precio": 3180.54
          },
          {
            "Posición": "740",
            "Servicio": "5013986",
            "Descripción": "PREPARAR RACK 900 MM O MENOR P/INTERNA",
            "Precio": 2449.76
          },
          {
            "Posición": "750",
            "Servicio": "5014657",
            "Descripción": "RELEVAMIENTO Y DOCUMENTACIÓN PI",
            "Precio": 21655
          },
          {
            "Posición": "760",
            "Servicio": "5015528",
            "Descripción": "TENDIDO CAB MINICO ESTRUC BJA P/INTERNA",
            "Precio": 2047.16
          },
          {
            "Posición": "770",
            "Servicio": "5015529",
            "Descripción": "TENDIDO CAB MINICO ESTRUC RACK P/INTERNA",
            "Precio": 1748.26
          },
          {
            "Posición": "780",
            "Servicio": "5015530",
            "Descripción": "TENDIDO CAB RG-59 ESTRUC BJA P/INTERNA",
            "Precio": 1345.66
          },
          {
            "Posición": "790",
            "Servicio": "5015531",
            "Descripción": "TENDIDO CAB RG-59 ESTRUC RACK P/INTERNA",
            "Precio": 1063.84
          },
          {
            "Posición": "800",
            "Servicio": "5022604",
            "Descripción": "TRASLADO MATERIALES P.I. – PORTE ALTO",
            "Precio": 424.56
          },
          {
            "Posición": "810",
            "Servicio": "5022603",
            "Descripción": "TRASLADO MATERIALES P.I. – PORTE MEDIO",
            "Precio": 398.94
          },
          {
            "Posición": "820",
            "Servicio": "5022602",
            "Descripción": "TRASLADO MATERIALES P.I. – PORTE MENOR",
            "Precio": 161.04
          },
          {
            "Posición": "830",
            "Servicio": "5005586",
            "Descripción": "RETROACTIVO - AJUSTE DE PRECIOS",
            "Precio": 1
          }
        ]
    }))


let tareas=JSON.parse(JSON.stringify({
    "Agrupados": [
        {
            "Pos NPA": "AC 112 HD DC VODx32",
            "Tarea": "AC 112 HD - cBR8 con 32 SG por boca VOD",
            "Agrupado": "SI"
        },
        {
            "Pos NPA": "AC 112 SD",
            "Tarea": "AC 112 SD - cBR8 Baja Densidad 1DS:2TX",
            "Agrupado": "SI"
        },
        {
            "Pos NPA": "AC 112 SD s/VOD",
            "Tarea": "AC 112 SD - cBR8 Baja Densidad Sin VOD",
            "Agrupado": "SI"
        },
        {
            "Pos NPA": "AC 112 UHD VOD",
            "Tarea": "AC 112 UHD - cBR8 con VOD/32 SG en 1 rack",
            "Agrupado": "SI"
        },
        {
            "Pos NPA": "AC 224 HD DC",
            "Tarea": "AC 224 HD - cBR8 Fiber Deep con VOD",
            "Agrupado": "SI"
        },
        {
            "Pos NPA": "AC 56 HD DC s/VOD",
            "Tarea": "AC 56 HD DC - C100 G Alta Densidad c/AC sin VOD",
            "Agrupado": "SI"
        },
        {
            "Pos NPA": "AC 56 HD DC",
            "Tarea": "AC 56 HD DC - C100 G Alta Densidad con Acopladores",
            "Agrupado": "SI"
        },
        {
            "Pos NPA": "AC 64 HD Comb",
            "Tarea": "AC 64 HD Comb - cBR8 Alta Densidad con Combinadores",
            "Agrupado": "SI"
        },
        {
            "Pos NPA": "AC 64 HD DC",
            "Tarea": "AC 64 HD DC - cBR8 Alta Densidad con Acopladores",
            "Agrupado": "SI"
        },
        {
            "Pos NPA": "AC 64 HD DC s/VOD",
            "Tarea": "AC 64 HD DC sin VOD - cBR8 Alta Densidad con Acopladores sin VOD",
            "Agrupado": "SI"
        },
        {
            "Pos NPA": "AC 96 HD DC",
            "Tarea": "AC 96 HD DC - E6K Alta Densidad con Acopladores",
            "Agrupado": "SI"
        },
        {
            "Pos NPA": "AC 96 SD",
            "Tarea": "AC 96 SD - E6K Baja Densidad",
            "Agrupado": "SI"
        },
        {
            "Pos NPA": "AC 96 UHD VOD",
            "Tarea": "AC 96 UHD - E6K con VOD/32 SG en 1 rack",
            "Agrupado": "SI"
        },
        {
            "Pos NPA": "20",
            "Tarea": "ACONDICIONADO DE LOCAL PLANTA INTERNA",
            "Agrupado": "NO"
        },
        {
            "Pos NPA": "30",
            "Tarea": "ACOPLE CAÑO DAISA 7/8\" SOBRE ALA BJA.",
            "Agrupado": "NO"
        },
        {
            "Pos NPA": "40",
            "Tarea": "ADIC BJA. ACCESORIOS P/TÉCNICO P/INTERNA",
            "Agrupado": "NO"
        },
        {
            "Pos NPA": "50",
            "Tarea": "ADICIONAL CAJA DAISA (TECHO O BAJO PISO)",
            "Agrupado": "NO"
        },
        {
            "Pos NPA": "60",
            "Tarea": "ADICIONAL CAÑO DAISA (TECHO O BAJO PISO)",
            "Agrupado": "NO"
        },
        {
            "Pos NPA": "70",
            "Tarea": "ADICIONAL CAÑO DAISA POR BORDEO",
            "Agrupado": "NO"
        },
        {
            "Pos NPA": "80",
            "Tarea": "ADICIONAL INST E IMPACTADO C/ 6 UTP ADIC",
            "Agrupado": "NO"
        },
        {
            "Pos NPA": "90",
            "Tarea": "ADICIONAL MULTIPATCH MPO/FO P/INTERNA",
            "Agrupado": "NO"
        },
        {
            "Pos NPA": "100",
            "Tarea": "ADICIONAL TRASLADO Y UBICACIÓN DE OBRA",
            "Agrupado": "NO"
        },
        {
            "Pos NPA": "110",
            "Tarea": "ARMADO CAB DE CONEX MINICOAXIL P/INTERNA",
            "Agrupado": "NO"
        },
        {
            "Pos NPA": "120",
            "Tarea": "ARMADO DE CABLE DE CONEX RG-59 P/INTERNA",
            "Agrupado": "NO"
        },
        {
            "Pos NPA": "130",
            "Tarea": "ARMADO DE FIBER GUIDE",
            "Agrupado": "NO"
        },
        {
            "Pos NPA": "140",
            "Tarea": "AYUDANTE DE OBRA – PLANTA INTERNA",
            "Agrupado": "NO"
        },
        {
            "Pos NPA": "150",
            "Tarea": "CABLEADO (MAYOR A 10 MM) P/UN Y P/M.",
            "Agrupado": "NO"
        },
        {
            "Pos NPA": "Rack 16 CH Ana",
            "Tarea": "Cableado rack cabezal Analogico (16 CH x Rack)",
            "Agrupado": "SI"
        },
        {
            "Pos NPA": "160",
            "Tarea": "CABLEADO X METRO INSTALADO 1",
            "Agrupado": "NO"
        },
        {
            "Pos NPA": "170",
            "Tarea": "CABLEADO X METRO INSTALADO 2",
            "Agrupado": "NO"
        },
        {
            "Pos NPA": "180",
            "Tarea": "CABLEADO X METRO INSTALADO 3 O MAS",
            "Agrupado": "NO"
        },
        {
            "Pos NPA": "Cables RX-MTZ (120)",
            "Tarea": "Cables de Rx a Matriz (120)",
            "Agrupado": "SI"
        },
        {
            "Pos NPA": "Cables RX-MTZ (96)",
            "Tarea": "Cables de Rx a Matriz (96)",
            "Agrupado": "SI"
        },
        {
            "Pos NPA": "10",
            "Tarea": "CERT.ENLACE.FO.PI_DE.72.HASTA.144.PELOS",
            "Agrupado": "NO"
        },
        {
            "Pos NPA": "200",
            "Tarea": "CERT.ENLACE.FO.PI_HASTA.72.PELOS",
            "Agrupado": "NO"
        },
        {
            "Pos NPA": "190",
            "Tarea": "CERTIFICACIÓN ENLACE FO PLANTA INTERNA",
            "Agrupado": "NO"
        },
        {
            "Pos NPA": "210",
            "Tarea": "CERTIFICACIÓN VINCULO FO PLANTA INTERNA",
            "Agrupado": "NO"
        },
        {
            "Pos NPA": "220",
            "Tarea": "COLOCAR BASTI VER HD ACTIVO P/INTERNA",
            "Agrupado": "NO"
        },
        {
            "Pos NPA": "230",
            "Tarea": "COLOCAR BASTI VER HD PASIVO P/INTERNA",
            "Agrupado": "NO"
        },
        {
            "Pos NPA": "240",
            "Tarea": "COLOCAR BASTI VERTICAL ACTIVO P/INTERNA",
            "Agrupado": "NO"
        },
        {
            "Pos NPA": "250",
            "Tarea": "COLOCAR BASTIDOR HORIZONTAL - P/INTERNA",
            "Agrupado": "NO"
        },
        {
            "Pos NPA": "260",
            "Tarea": "COLOCAR BASTIDOR VERTICAL - P/INTERNA",
            "Agrupado": "NO"
        },
        {
            "Pos NPA": "270",
            "Tarea": "COLOCAR PASIVOS BD - PLANTA INTERNA",
            "Agrupado": "NO"
        },
        {
            "Pos NPA": "280",
            "Tarea": "COLOCAR PASIVOS HD - PLANTA INTERNA",
            "Agrupado": "NO"
        },
        {
            "Pos NPA": "290",
            "Tarea": "COLOCAR SEPARADOR HORIZONTAL P/INTERNA",
            "Agrupado": "NO"
        },
        {
            "Pos NPA": "300",
            "Tarea": "COLOCAR TECHNETIX - PLANTA INTERNA",
            "Agrupado": "NO"
        },
        {
            "Pos NPA": "310",
            "Tarea": "DESMONTE BANDEJA Y ACCESORIOS P/INTERNA",
            "Agrupado": "NO"
        },
        {
            "Pos NPA": "320",
            "Tarea": "DESMONTE INSTALACIONES",
            "Agrupado": "NO"
        },
        {
            "Pos NPA": "330",
            "Tarea": "DESMONTE TENDIDOS",
            "Agrupado": "NO"
        },
        {
            "Pos NPA": "340",
            "Tarea": "DOBLADO DE CAÑO DAISA",
            "Agrupado": "NO"
        },
        {
            "Pos NPA": "350",
            "Tarea": "EMPALME POR FUSIÓN FO EN PLANTA INTERNA",
            "Agrupado": "NO"
        },
        {
            "Pos NPA": "360",
            "Tarea": "INST. 2 CANALES ENERGÍA RACK/CABLE/PAT",
            "Agrupado": "NO"
        },
        {
            "Pos NPA": "370",
            "Tarea": "INST. ACCESORIOS BJA ESCALERA P/INTERNA",
            "Agrupado": "NO"
        },
        {
            "Pos NPA": "380",
            "Tarea": "INST. ACCESORIOS BJA RANURADAS P/INTERNA",
            "Agrupado": "NO"
        },
        {
            "Pos NPA": "390",
            "Tarea": "INST. CAJA DAISA C/DERIVACIÓN PARED",
            "Agrupado": "NO"
        },
        {
            "Pos NPA": "400",
            "Tarea": "INST. CAJA DAISA S/DERIVACIÓN PARED",
            "Agrupado": "NO"
        },
        {
            "Pos NPA": "410",
            "Tarea": "INST. DE BANDEJA ESCALERA P/INTERNA",
            "Agrupado": "NO"
        },
        {
            "Pos NPA": "420",
            "Tarea": "INST. DE BANDEJA RANURADA P/INTERNA",
            "Agrupado": "NO"
        },
        {
            "Pos NPA": "Bda Ranur Bjo Piso",
            "Tarea": "INSTALACIÓN Bjo Piso DE BANDEJA  RANURADA PLANTA INTERNA",
            "Agrupado": "SI"
        },
        {
            "Pos NPA": "Bda Escal Bjo Piso",
            "Tarea": "INSTALACIÓN Bjo Piso DE BANDEJA  TIPO ESCALERA PLANTA INTERNA",
            "Agrupado": "SI"
        },
        {
            "Pos NPA": "Acc Ranur Bjo Piso",
            "Tarea": "INSTALACIÓN Bjo Piso DE CURVA O DERIVACIÓN EN BANDEJAS RANURADAS PLANTA INTERNA",
            "Agrupado": "SI"
        },
        {
            "Pos NPA": "ACC Escal Bjo Piso",
            "Tarea": "INSTALACIÓN Bjo Piso DE CURVA O DERIVACIÓN EN BANDEJAS TIPO ESCALERA PLANTA INTERNA",
            "Agrupado": "SI"
        },
        {
            "Pos NPA": "Caño Bjo Piso/Techo",
            "Tarea": "INSTALACIÓN Bjo Piso/Techo DE CAÑO DAISA RECTO CON ABRAZADERA BC078L",
            "Agrupado": "SI"
        },
        {
            "Pos NPA": "430",
            "Tarea": "INSTALACIÓN BOCA UTP DOBLE",
            "Agrupado": "NO"
        },
        {
            "Pos NPA": "440",
            "Tarea": "INSTALACIÓN CRUZ O T SUSPENDIDA",
            "Agrupado": "NO"
        },
        {
            "Pos NPA": "450",
            "Tarea": "INSTALACIÓN CURVA C/CUPLAS",
            "Agrupado": "NO"
        },
        {
            "Pos NPA": "460",
            "Tarea": "INSTALACIÓN DE CABLECANAL O ZÓCALOCANAL",
            "Agrupado": "NO"
        },
        {
            "Pos NPA": "470",
            "Tarea": "INSTALACIÓN DE CAÑO DAISA RECTO",
            "Agrupado": "NO"
        },
        {
            "Pos NPA": "Set 12 UTP",
            "Tarea": "Instalacion e impactado de 12 UTP",
            "Agrupado": "SI"
        },
        {
            "Pos NPA": "Set 24 UTP",
            "Tarea": "Instalacion e impactado de 24 UTP",
            "Agrupado": "SI"
        },
        {
            "Pos NPA": "Set 36 UTP",
            "Tarea": "Instalacion e impactado de 36 UTP",
            "Agrupado": "SI"
        },
        {
            "Pos NPA": "Set 48 UTP",
            "Tarea": "Instalacion e impactado de 48 UTP",
            "Agrupado": "SI"
        },
        {
            "Pos NPA": "480",
            "Tarea": "INSTALACIÓN E IMPACTADO DE 6 UTP",
            "Agrupado": "NO"
        },
        {
            "Pos NPA": "490",
            "Tarea": "INSTALACIÓN MULTIPATCH FO (12) P/INTERNA",
            "Agrupado": "NO"
        },
        {
            "Pos NPA": "500",
            "Tarea": "INSTALACIÓN MULTIPATCH MPO(12) P/INTERNA",
            "Agrupado": "NO"
        },
        {
            "Pos NPA": "510",
            "Tarea": "INSTALACIÓN MULTIPATCH MPO(144)P/INTERNA",
            "Agrupado": "NO"
        },
        {
            "Pos NPA": "520",
            "Tarea": "INSTALACIÓN MULTIPATCH MPO(24) P/INTERNA",
            "Agrupado": "NO"
        },
        {
            "Pos NPA": "530",
            "Tarea": "INSTALACIÓN MULTIPATCH MPO(36 )P/INTERNA",
            "Agrupado": "NO"
        },
        {
            "Pos NPA": "540",
            "Tarea": "INSTALACIÓN MULTIPATCH MPO(48) P/INTERNA",
            "Agrupado": "NO"
        },
        {
            "Pos NPA": "550",
            "Tarea": "INSTALACIÓN MULTIPATCH MPO(72) P/INTERNA",
            "Agrupado": "NO"
        },
        {
            "Pos NPA": "560",
            "Tarea": "INSTALACIÓN PATCHERA X JACK",
            "Agrupado": "NO"
        },
        {
            "Pos NPA": "570",
            "Tarea": "INSTALACIÓN PERFIL OLMAR SUSPENDIDO",
            "Agrupado": "NO"
        },
        {
            "Pos NPA": "580",
            "Tarea": "INSTALACIÓN PISO TÉCNICO COMPLETO",
            "Agrupado": "NO"
        },
        {
            "Pos NPA": "590",
            "Tarea": "INSTALACIÓN SENSOR, BOTON, CAMARA, ETC",
            "Agrupado": "NO"
        },
        {
            "Pos NPA": "600",
            "Tarea": "INSTALACIÓN TABLERO CHICO",
            "Agrupado": "NO"
        },
        {
            "Pos NPA": "610",
            "Tarea": "INSTALACIÓN TABLERO GRANDE",
            "Agrupado": "NO"
        },
        {
            "Pos NPA": "620",
            "Tarea": "IZADO DE MATERIALES",
            "Agrupado": "NO"
        },
        {
            "Pos NPA": "630",
            "Tarea": "ORGANIZAR CAB BASTI TECHNETIK P/INTERNA",
            "Agrupado": "NO"
        },
        {
            "Pos NPA": "640",
            "Tarea": "ORGANIZAR CAB BASTI VER ACT P/INTERNA",
            "Agrupado": "NO"
        },
        {
            "Pos NPA": "650",
            "Tarea": "ORGANIZAR CAB BASTI VER HD ACT P/INTERNA",
            "Agrupado": "NO"
        },
        {
            "Pos NPA": "660",
            "Tarea": "ORGANIZAR CAB BASTI VER HD PAS P/INTERNA",
            "Agrupado": "NO"
        },
        {
            "Pos NPA": "670",
            "Tarea": "ORGANIZAR CABLES BASTIDOR HOR P/INTERNA",
            "Agrupado": "NO"
        },
        {
            "Pos NPA": "680",
            "Tarea": "ORGANIZAR CABLES BASTIDOR VER P/INTERNA",
            "Agrupado": "NO"
        },
        {
            "Pos NPA": "690",
            "Tarea": "PASO DE LOSA",
            "Agrupado": "NO"
        },
        {
            "Pos NPA": "700",
            "Tarea": "PASO DE MURO CON BANDEJA",
            "Agrupado": "NO"
        },
        {
            "Pos NPA": "710",
            "Tarea": "PASO DE MURO CON CAÑO",
            "Agrupado": "NO"
        },
        {
            "Pos NPA": "720",
            "Tarea": "PREPARAR ACRÍLICO MATRIZ CMTS P/INTERNA",
            "Agrupado": "NO"
        },
        {
            "Pos NPA": "730",
            "Tarea": "PREPARAR RACK 1000 MM O MAYOR P/INTERNA",
            "Agrupado": "NO"
        },
        {
            "Pos NPA": "740",
            "Tarea": "PREPARAR RACK 900 MM O MENOR P/INTERNA",
            "Agrupado": "NO"
        },
        {
            "Pos NPA": "Rack 120 RX PBN",
            "Tarea": "Rack 120 RX PBN/GX4 c/PTK",
            "Agrupado": "SI"
        },
        {
            "Pos NPA": "Rack AC Legacy",
            "Tarea": "Rack Autocontenido Legacy",
            "Agrupado": "SI"
        },
        {
            "Pos NPA": "Rack cBR8",
            "Tarea": "Rack cBR8 contra Matriz",
            "Agrupado": "SI"
        },
        {
            "Pos NPA": "Rack E6K 1G",
            "Tarea": "Rack E6000 1G contra Matriz",
            "Agrupado": "SI"
        },
        {
            "Pos NPA": "HW1V220",
            "Tarea": "Rack para 1 OLT Huawei, con energización en 220 V",
            "Agrupado": "SI"
        },
        {
            "Pos NPA": "HW1V48",
            "Tarea": "Rack para 1 OLT Huawei, con energización en 48 Vcc - 10 metros al ACC3",
            "Agrupado": "SI"
        },
        {
            "Pos NPA": "NK1V220",
            "Tarea": "Rack para 1 OLT Nokia, con energización en 220 V",
            "Agrupado": "SI"
        },
        {
            "Pos NPA": "NK1V48",
            "Tarea": "Rack para 1 OLT Nokia, con energización en 48 Vcc - 10 metros al ACC3",
            "Agrupado": "SI"
        },
        {
            "Pos NPA": "HW2V220",
            "Tarea": "Rack para 2 OLT Huawei, con energización en 220 V",
            "Agrupado": "SI"
        },
        {
            "Pos NPA": "HW2V48",
            "Tarea": "Rack para 2 OLT Huawei, con energización en 48 Vcc - 10 metros al ACC3",
            "Agrupado": "SI"
        },
        {
            "Pos NPA": "NK2V220",
            "Tarea": "Rack para 2 OLT Nokia, con energización en 220 V",
            "Agrupado": "SI"
        },
        {
            "Pos NPA": "NK2V48",
            "Tarea": "Rack para 2 OLT Nokia, con energización en 48 Vcc - 10 metros al ACC3",
            "Agrupado": "SI"
        },
        {
            "Pos NPA": "Rack 80 TX",
            "Tarea": "Rack TX / INS / DS  Tech  (80 TX)",
            "Agrupado": "SI"
        },
        {
            "Pos NPA": "Rack 120 TX",
            "Tarea": "Rack TX / INS / DS  Tech (120 TX)",
            "Agrupado": "SI"
        },
        {
            "Pos NPA": "AC 64 SD",
            "Tarea": "Racks Autocontenido CCAP 64 segmentos SD (1,5 racks)",
            "Agrupado": "SI"
        },
        {
            "Pos NPA": "750",
            "Tarea": "RELEVAMIENTO Y DOCUMENTACIÓN PI",
            "Agrupado": "NO"
        },
        {
            "Pos NPA": "760",
            "Tarea": "TENDIDO CAB MINICO ESTRUC BJA P/INTERNA",
            "Agrupado": "NO"
        },
        {
            "Pos NPA": "770",
            "Tarea": "TENDIDO CAB MINICO ESTRUC RACK P/INTERNA",
            "Agrupado": "NO"
        },
        {
            "Pos NPA": "780",
            "Tarea": "TENDIDO CAB RG-59 ESTRUC BJA P/INTERNA",
            "Agrupado": "NO"
        },
        {
            "Pos NPA": "790",
            "Tarea": "TENDIDO CAB RG-59 ESTRUC RACK P/INTERNA",
            "Agrupado": "NO"
        },
        {
            "Pos NPA": "800",
            "Tarea": "TRASLADO MATERIALES P.I. – PORTE ALTO",
            "Agrupado": "NO"
        },
        {
            "Pos NPA": "810",
            "Tarea": "TRASLADO MATERIALES P.I. – PORTE MEDIO",
            "Agrupado": "NO"
        },
        {
            "Pos NPA": "820",
            "Tarea": "TRASLADO MATERIALES P.I. – PORTE MENOR",
            "Agrupado": "NO"
        }
    ]
}))

let tareas_agrupadas=JSON.parse(JSON.stringify(
    {
        "Agrupados": [
          {
            "Cableado": "Set 12 UTP",
            "Código": 5010530,
            "Descripción": "INSTALACIÓN E IMPACTADO DE 6 UTP",
            "Cantidad": 1.75,
            "Pos NPA": 480
          },
          {
            "Cableado": "Set 24 UTP",
            "Código": 5010530,
            "Descripción": "INSTALACIÓN E IMPACTADO DE 6 UTP",
            "Cantidad": 3.25,
            "Pos NPA": 480
          },
          {
            "Cableado": "Set 36 UTP",
            "Código": 5010530,
            "Descripción": "INSTALACIÓN E IMPACTADO DE 6 UTP",
            "Cantidad": 4.75,
            "Pos NPA": 480
          },
          {
            "Cableado": "Set 48 UTP",
            "Código": 5010530,
            "Descripción": "INSTALACIÓN E IMPACTADO DE 6 UTP",
            "Cantidad": 6.25,
            "Pos NPA": 480
          },
          {
            "Cableado": "Bda Ranur Bjo Piso",
            "Código": 5010341,
            "Descripción": "INST. DE BANDEJA RANURADA P/INTERNA",
            "Cantidad": 1.4,
            "Pos NPA": 420
          },
          {
            "Cableado": "Bda Escal Bjo Piso",
            "Código": 5010340,
            "Descripción": "INST. DE BANDEJA ESCALERA P/INTERNA",
            "Cantidad": 1.4,
            "Pos NPA": 410
          },
          {
            "Cableado": "Acc Ranur Bjo Piso",
            "Código": 5010336,
            "Descripción": "INST. ACCESORIOS BJA RANURADAS P/INTERNA",
            "Cantidad": 1.4,
            "Pos NPA": 380
          },
          {
            "Cableado": "ACC Escal Bjo Piso",
            "Código": 5010335,
            "Descripción": "INST. ACCESORIOS BJA ESCALERA P/INTERNA",
            "Cantidad": 1.4,
            "Pos NPA": 370
          },
          {
            "Cableado": "Caño Bjo Piso/Techo",
            "Código": 5010503,
            "Descripción": "INSTALACIÓN DE CAÑO DAISA RECTO",
            "Cantidad": 1.52,
            "Pos NPA": 470
          },
          {
            "Cableado": "Rack AC Legacy",
            "Código": 5013986,
            "Descripción": "PREPARAR RACK 900 MM O MENOR P/INTERNA",
            "Cantidad": 1,
            "Pos NPA": 740
          },
          {
            "Cableado": "Rack AC Legacy",
            "Código": 5007437,
            "Descripción": "ARMADO DE CABLE DE CONEX RG-59 P/INTERNA",
            "Cantidad": 119,
            "Pos NPA": 120
          },
          {
            "Cableado": "Rack AC Legacy",
            "Código": 5015531,
            "Descripción": "TENDIDO CAB RG-59 ESTRUC RACK P/INTERNA",
            "Cantidad": 116,
            "Pos NPA": 790
          },
          {
            "Cableado": "Rack AC Legacy",
            "Código": 5015530,
            "Descripción": "TENDIDO CAB RG-59 ESTRUC BJA P/INTERNA",
            "Cantidad": 4,
            "Pos NPA": 780
          },
          {
            "Cableado": "Rack AC Legacy",
            "Código": 5008283,
            "Descripción": "COLOCAR BASTIDOR HORIZONTAL - P/INTERNA",
            "Cantidad": 2,
            "Pos NPA": 250
          },
          {
            "Cableado": "Rack AC Legacy",
            "Código": 5013583,
            "Descripción": "ORGANIZAR CABLES BASTIDOR HOR P/INTERNA",
            "Cantidad": 2,
            "Pos NPA": 670
          },
          {
            "Cableado": "Rack AC Legacy",
            "Código": 5008284,
            "Descripción": "COLOCAR BASTIDOR VERTICAL - P/INTERNA",
            "Cantidad": 1,
            "Pos NPA": 260
          },
          {
            "Cableado": "Rack AC Legacy",
            "Código": 5013584,
            "Descripción": "ORGANIZAR CABLES BASTIDOR VER P/INTERNA",
            "Cantidad": 1,
            "Pos NPA": 680
          },
          {
            "Cableado": "Rack AC Legacy",
            "Código": 5008282,
            "Descripción": "COLOCAR BASTI VERTICAL ACTIVO P/INTERNA",
            "Cantidad": 1,
            "Pos NPA": 240
          },
          {
            "Cableado": "Rack AC Legacy",
            "Código": 5013580,
            "Descripción": "ORGANIZAR CAB BASTI VER ACT P/INTERNA",
            "Cantidad": 1,
            "Pos NPA": 640
          },
          {
            "Cableado": "Rack AC Legacy",
            "Código": 5008287,
            "Descripción": "COLOCAR SEPARADOR HORIZONTAL P/INTERNA",
            "Cantidad": 4,
            "Pos NPA": 290
          },
          {
            "Cableado": "Rack AC Legacy",
            "Código": 5008285,
            "Descripción": "COLOCAR PASIVOS BD - PLANTA INTERNA",
            "Cantidad": 26,
            "Pos NPA": 270
          },
          {
            "Cableado": "Rack E6K 1G",
            "Código": 5013985,
            "Descripción": "PREPARAR RACK 1000 MM O MAYOR P/INTERNA",
            "Cantidad": 1,
            "Pos NPA": 730
          },
          {
            "Cableado": "Rack E6K 1G",
            "Código": 5015531,
            "Descripción": "TENDIDO CAB RG-59 ESTRUC RACK P/INTERNA",
            "Cantidad": 96,
            "Pos NPA": 790
          },
          {
            "Cableado": "Rack E6K 1G",
            "Código": 5015530,
            "Descripción": "TENDIDO CAB RG-59 ESTRUC BJA P/INTERNA",
            "Cantidad": 144,
            "Pos NPA": 780
          },
          {
            "Cableado": "Rack E6K 1G",
            "Código": 5015529,
            "Descripción": "TENDIDO CAB MINICO ESTRUC RACK P/INTERNA",
            "Cantidad": 96,
            "Pos NPA": 770
          },
          {
            "Cableado": "Rack E6K 1G",
            "Código": 5015528,
            "Descripción": "TENDIDO CAB MINICO ESTRUC BJA P/INTERNA",
            "Cantidad": 96,
            "Pos NPA": 760
          },
          {
            "Cableado": "Rack E6K 1G",
            "Código": 5008284,
            "Descripción": "COLOCAR BASTIDOR VERTICAL - P/INTERNA",
            "Cantidad": 1,
            "Pos NPA": 260
          },
          {
            "Cableado": "Rack E6K 1G",
            "Código": 5013584,
            "Descripción": "ORGANIZAR CABLES BASTIDOR VER P/INTERNA",
            "Cantidad": 1,
            "Pos NPA": 680
          },
          {
            "Cableado": "Rack E6K 1G",
            "Código": 5008285,
            "Descripción": "COLOCAR PASIVOS BD - PLANTA INTERNA",
            "Cantidad": 16,
            "Pos NPA": 270
          },
          {
            "Cableado": "Rack E6K 1G",
            "Código": 5013984,
            "Descripción": "PREPARAR ACRÍLICO MATRIZ CMTS P/INTERNA",
            "Cantidad": 1,
            "Pos NPA": 720
          },
          {
            "Cableado": "Rack cBR8",
            "Código": 5013985,
            "Descripción": "PREPARAR RACK 1000 MM O MAYOR P/INTERNA",
            "Cantidad": 1,
            "Pos NPA": 730
          },
          {
            "Cableado": "Rack cBR8",
            "Código": 5015531,
            "Descripción": "TENDIDO CAB RG-59 ESTRUC RACK P/INTERNA",
            "Cantidad": 112,
            "Pos NPA": 790
          },
          {
            "Cableado": "Rack cBR8",
            "Código": 5015530,
            "Descripción": "TENDIDO CAB RG-59 ESTRUC BJA P/INTERNA",
            "Cantidad": 112,
            "Pos NPA": 780
          },
          {
            "Cableado": "Rack cBR8",
            "Código": 5015529,
            "Descripción": "TENDIDO CAB MINICO ESTRUC RACK P/INTERNA",
            "Cantidad": 160,
            "Pos NPA": 770
          },
          {
            "Cableado": "Rack cBR8",
            "Código": 5015529,
            "Descripción": "TENDIDO CAB MINICO ESTRUC RACK P/INTERNA",
            "Cantidad": 8,
            "Pos NPA": 770
          },
          {
            "Cableado": "Rack cBR8",
            "Código": 5015528,
            "Descripción": "TENDIDO CAB MINICO ESTRUC BJA P/INTERNA",
            "Cantidad": 112,
            "Pos NPA": 760
          },
          {
            "Cableado": "Rack cBR8",
            "Código": 5008284,
            "Descripción": "COLOCAR BASTIDOR VERTICAL - P/INTERNA",
            "Cantidad": 1,
            "Pos NPA": 260
          },
          {
            "Cableado": "Rack cBR8",
            "Código": 5013584,
            "Descripción": "ORGANIZAR CABLES BASTIDOR VER P/INTERNA",
            "Cantidad": 1,
            "Pos NPA": 680
          },
          {
            "Cableado": "Rack cBR8",
            "Código": 5008285,
            "Descripción": "COLOCAR PASIVOS BD - PLANTA INTERNA",
            "Cantidad": 19,
            "Pos NPA": 270
          },
          {
            "Cableado": "Rack cBR8",
            "Código": 5013984,
            "Descripción": "PREPARAR ACRÍLICO MATRIZ CMTS P/INTERNA",
            "Cantidad": 1,
            "Pos NPA": 720
          },
          {
            "Cableado": "AC 64 SD",
            "Código": 5013985,
            "Descripción": "PREPARAR RACK 1000 MM O MAYOR P/INTERNA",
            "Cantidad": 2,
            "Pos NPA": 730
          },
          {
            "Cableado": "AC 64 SD",
            "Código": 5007437,
            "Descripción": "ARMADO DE CABLE DE CONEX RG-59 P/INTERNA",
            "Cantidad": 148,
            "Pos NPA": 120
          },
          {
            "Cableado": "AC 64 SD",
            "Código": 5015530,
            "Descripción": "TENDIDO CAB RG-59 ESTRUC BJA P/INTERNA",
            "Cantidad": 6,
            "Pos NPA": 780
          },
          {
            "Cableado": "AC 64 SD",
            "Código": 5015531,
            "Descripción": "TENDIDO CAB RG-59 ESTRUC RACK P/INTERNA",
            "Cantidad": 0,
            "Pos NPA": 790
          },
          {
            "Cableado": "AC 64 SD",
            "Código": 5007436,
            "Descripción": "ARMADO CAB DE CONEX MINICOAXIL P/INTERNA",
            "Cantidad": 136,
            "Pos NPA": 110
          },
          {
            "Cableado": "AC 64 SD",
            "Código": 5015528,
            "Descripción": "TENDIDO CAB MINICO ESTRUC BJA P/INTERNA",
            "Cantidad": 0,
            "Pos NPA": 760
          },
          {
            "Cableado": "AC 64 SD",
            "Código": 5015529,
            "Descripción": "TENDIDO CAB MINICO ESTRUC RACK P/INTERNA",
            "Cantidad": 136,
            "Pos NPA": 770
          },
          {
            "Cableado": "AC 64 SD",
            "Código": 5008284,
            "Descripción": "COLOCAR BASTIDOR VERTICAL - P/INTERNA",
            "Cantidad": 2,
            "Pos NPA": 260
          },
          {
            "Cableado": "AC 64 SD",
            "Código": 5013584,
            "Descripción": "ORGANIZAR CABLES BASTIDOR VER P/INTERNA",
            "Cantidad": 2,
            "Pos NPA": 680
          },
          {
            "Cableado": "AC 64 SD",
            "Código": 5008285,
            "Descripción": "COLOCAR PASIVOS BD - PLANTA INTERNA",
            "Cantidad": 44,
            "Pos NPA": 270
          },
          {
            "Cableado": "AC 64 SD",
            "Código": 5008283,
            "Descripción": "COLOCAR BASTIDOR HORIZONTAL - P/INTERNA",
            "Cantidad": 1,
            "Pos NPA": 250
          },
          {
            "Cableado": "AC 64 SD",
            "Código": 5013583,
            "Descripción": "ORGANIZAR CABLES BASTIDOR HOR P/INTERNA",
            "Cantidad": 1,
            "Pos NPA": 670
          },
          {
            "Cableado": "AC 64 SD",
            "Código": 5008287,
            "Descripción": "COLOCAR SEPARADOR HORIZONTAL P/INTERNA",
            "Cantidad": 7,
            "Pos NPA": 290
          },
          {
            "Cableado": "AC 64 SD",
            "Código": 5008288,
            "Descripción": "COLOCAR TECHNETIX - PLANTA INTERNA",
            "Cantidad": 3,
            "Pos NPA": 300
          },
          {
            "Cableado": "AC 64 SD",
            "Código": 5013579,
            "Descripción": "ORGANIZAR CAB BASTI TECHNETIK P/INTERNA",
            "Cantidad": 3,
            "Pos NPA": 630
          },
          {
            "Cableado": "AC 112 SD",
            "Código": 5013985,
            "Descripción": "PREPARAR RACK 1000 MM O MAYOR P/INTERNA",
            "Cantidad": 2,
            "Pos NPA": 730
          },
          {
            "Cableado": "AC 112 SD",
            "Código": 5007437,
            "Descripción": "ARMADO DE CABLE DE CONEX RG-59 P/INTERNA",
            "Cantidad": 39,
            "Pos NPA": 120
          },
          {
            "Cableado": "AC 112 SD",
            "Código": 5015530,
            "Descripción": "TENDIDO CAB RG-59 ESTRUC BJA P/INTERNA",
            "Cantidad": 12,
            "Pos NPA": 780
          },
          {
            "Cableado": "AC 112 SD",
            "Código": 5015531,
            "Descripción": "TENDIDO CAB RG-59 ESTRUC RACK P/INTERNA",
            "Cantidad": 0,
            "Pos NPA": 790
          },
          {
            "Cableado": "AC 112 SD",
            "Código": 5007436,
            "Descripción": "ARMADO CAB DE CONEX MINICOAXIL P/INTERNA",
            "Cantidad": 160,
            "Pos NPA": 110
          },
          {
            "Cableado": "AC 112 SD",
            "Código": 5007436,
            "Descripción": "ARMADO CAB DE CONEX MINICOAXIL P/INTERNA",
            "Cantidad": 64,
            "Pos NPA": 110
          },
          {
            "Cableado": "AC 112 SD",
            "Código": 5015528,
            "Descripción": "TENDIDO CAB MINICO ESTRUC BJA P/INTERNA",
            "Cantidad": 0,
            "Pos NPA": 760
          },
          {
            "Cableado": "AC 112 SD",
            "Código": 5015529,
            "Descripción": "TENDIDO CAB MINICO ESTRUC RACK P/INTERNA",
            "Cantidad": 160,
            "Pos NPA": 770
          },
          {
            "Cableado": "AC 112 SD",
            "Código": 5015529,
            "Descripción": "TENDIDO CAB MINICO ESTRUC RACK P/INTERNA",
            "Cantidad": 232,
            "Pos NPA": 770
          },
          {
            "Cableado": "AC 112 SD",
            "Código": 5008284,
            "Descripción": "COLOCAR BASTIDOR VERTICAL - P/INTERNA",
            "Cantidad": 4,
            "Pos NPA": 260
          },
          {
            "Cableado": "AC 112 SD",
            "Código": 5013584,
            "Descripción": "ORGANIZAR CABLES BASTIDOR VER P/INTERNA",
            "Cantidad": 4,
            "Pos NPA": 680
          },
          {
            "Cableado": "AC 112 SD",
            "Código": 5008285,
            "Descripción": "COLOCAR PASIVOS BD - PLANTA INTERNA",
            "Cantidad": 79,
            "Pos NPA": 270
          },
          {
            "Cableado": "AC 112 SD",
            "Código": 5008283,
            "Descripción": "COLOCAR BASTIDOR HORIZONTAL - P/INTERNA",
            "Cantidad": 2,
            "Pos NPA": 250
          },
          {
            "Cableado": "AC 112 SD",
            "Código": 5013583,
            "Descripción": "ORGANIZAR CABLES BASTIDOR HOR P/INTERNA",
            "Cantidad": 2,
            "Pos NPA": 670
          },
          {
            "Cableado": "AC 112 SD",
            "Código": 5008287,
            "Descripción": "COLOCAR SEPARADOR HORIZONTAL P/INTERNA",
            "Cantidad": 5,
            "Pos NPA": 290
          },
          {
            "Cableado": "AC 112 SD",
            "Código": 5008288,
            "Descripción": "COLOCAR TECHNETIX - PLANTA INTERNA",
            "Cantidad": 3,
            "Pos NPA": 300
          },
          {
            "Cableado": "AC 112 SD",
            "Código": 5013579,
            "Descripción": "ORGANIZAR CAB BASTI TECHNETIK P/INTERNA",
            "Cantidad": 3,
            "Pos NPA": 630
          },
          {
            "Cableado": "AC 64 HD Comb",
            "Código": 5013985,
            "Descripción": "PREPARAR RACK 1000 MM O MAYOR P/INTERNA",
            "Cantidad": 1,
            "Pos NPA": 730
          },
          {
            "Cableado": "AC 64 HD Comb",
            "Código": 5007437,
            "Descripción": "ARMADO DE CABLE DE CONEX RG-59 P/INTERNA",
            "Cantidad": 0,
            "Pos NPA": 120
          },
          {
            "Cableado": "AC 64 HD Comb",
            "Código": 5015530,
            "Descripción": "TENDIDO CAB RG-59 ESTRUC BJA P/INTERNA",
            "Cantidad": 0,
            "Pos NPA": 780
          },
          {
            "Cableado": "AC 64 HD Comb",
            "Código": 5015531,
            "Descripción": "TENDIDO CAB RG-59 ESTRUC RACK P/INTERNA",
            "Cantidad": 0,
            "Pos NPA": 790
          },
          {
            "Cableado": "AC 64 HD Comb",
            "Código": 5007436,
            "Descripción": "ARMADO CAB DE CONEX MINICOAXIL P/INTERNA",
            "Cantidad": 160,
            "Pos NPA": 110
          },
          {
            "Cableado": "AC 64 HD Comb",
            "Código": 5007436,
            "Descripción": "ARMADO CAB DE CONEX MINICOAXIL P/INTERNA",
            "Cantidad": 206,
            "Pos NPA": 110
          },
          {
            "Cableado": "AC 64 HD Comb",
            "Código": 5015528,
            "Descripción": "TENDIDO CAB MINICO ESTRUC BJA P/INTERNA",
            "Cantidad": 2,
            "Pos NPA": 760
          },
          {
            "Cableado": "AC 64 HD Comb",
            "Código": 5015529,
            "Descripción": "TENDIDO CAB MINICO ESTRUC RACK P/INTERNA",
            "Cantidad": 136,
            "Pos NPA": 770
          },
          {
            "Cableado": "AC 64 HD Comb",
            "Código": 5008281,
            "Descripción": "COLOCAR BASTI VER HD PASIVO P/INTERNA",
            "Cantidad": 4,
            "Pos NPA": 230
          },
          {
            "Cableado": "AC 64 HD Comb",
            "Código": 5013582,
            "Descripción": "ORGANIZAR CAB BASTI VER HD PAS P/INTERNA",
            "Cantidad": 4,
            "Pos NPA": 660
          },
          {
            "Cableado": "AC 64 HD Comb",
            "Código": 5008280,
            "Descripción": "COLOCAR BASTI VER HD ACTIVO P/INTERNA",
            "Cantidad": 1,
            "Pos NPA": 220
          },
          {
            "Cableado": "AC 64 HD Comb",
            "Código": 5013581,
            "Descripción": "ORGANIZAR CAB BASTI VER HD ACT P/INTERNA",
            "Cantidad": 1,
            "Pos NPA": 650
          },
          {
            "Cableado": "AC 64 HD Comb",
            "Código": 5008286,
            "Descripción": "COLOCAR PASIVOS HD - PLANTA INTERNA",
            "Cantidad": 93,
            "Pos NPA": 280
          },
          {
            "Cableado": "AC 64 HD Comb",
            "Código": 5008283,
            "Descripción": "COLOCAR BASTIDOR HORIZONTAL - P/INTERNA",
            "Cantidad": 0,
            "Pos NPA": 250
          },
          {
            "Cableado": "AC 64 HD Comb",
            "Código": 5013583,
            "Descripción": "ORGANIZAR CABLES BASTIDOR HOR P/INTERNA",
            "Cantidad": 0,
            "Pos NPA": 670
          },
          {
            "Cableado": "AC 64 HD Comb",
            "Código": 5008287,
            "Descripción": "COLOCAR SEPARADOR HORIZONTAL P/INTERNA",
            "Cantidad": 3,
            "Pos NPA": 290
          },
          {
            "Cableado": "AC 64 HD Comb",
            "Código": 5008288,
            "Descripción": "COLOCAR TECHNETIX - PLANTA INTERNA",
            "Cantidad": 0,
            "Pos NPA": 300
          },
          {
            "Cableado": "AC 64 HD Comb",
            "Código": 5013579,
            "Descripción": "ORGANIZAR CAB BASTI TECHNETIK P/INTERNA",
            "Cantidad": 0,
            "Pos NPA": 630
          },
          {
            "Cableado": "AC 64 HD DC",
            "Código": 5013985,
            "Descripción": "PREPARAR RACK 1000 MM O MAYOR P/INTERNA",
            "Cantidad": 1,
            "Pos NPA": 730
          },
          {
            "Cableado": "AC 64 HD DC",
            "Código": 5007437,
            "Descripción": "ARMADO DE CABLE DE CONEX RG-59 P/INTERNA",
            "Cantidad": 0,
            "Pos NPA": 120
          },
          {
            "Cableado": "AC 64 HD DC",
            "Código": 5015530,
            "Descripción": "TENDIDO CAB RG-59 ESTRUC BJA P/INTERNA",
            "Cantidad": 0,
            "Pos NPA": 780
          },
          {
            "Cableado": "AC 64 HD DC",
            "Código": 5015531,
            "Descripción": "TENDIDO CAB RG-59 ESTRUC RACK P/INTERNA",
            "Cantidad": 0,
            "Pos NPA": 790
          },
          {
            "Cableado": "AC 64 HD DC",
            "Código": 5007436,
            "Descripción": "ARMADO CAB DE CONEX MINICOAXIL P/INTERNA",
            "Cantidad": 160,
            "Pos NPA": 110
          },
          {
            "Cableado": "AC 64 HD DC",
            "Código": 5007436,
            "Descripción": "ARMADO CAB DE CONEX MINICOAXIL P/INTERNA",
            "Cantidad": 142,
            "Pos NPA": 110
          },
          {
            "Cableado": "AC 64 HD DC",
            "Código": 5015528,
            "Descripción": "TENDIDO CAB MINICO ESTRUC BJA P/INTERNA",
            "Cantidad": 2,
            "Pos NPA": 760
          },
          {
            "Cableado": "AC 64 HD DC",
            "Código": 5015529,
            "Descripción": "TENDIDO CAB MINICO ESTRUC RACK P/INTERNA",
            "Cantidad": 136,
            "Pos NPA": 770
          },
          {
            "Cableado": "AC 64 HD DC",
            "Código": 5008281,
            "Descripción": "COLOCAR BASTI VER HD PASIVO P/INTERNA",
            "Cantidad": 3,
            "Pos NPA": 230
          },
          {
            "Cableado": "AC 64 HD DC",
            "Código": 5013582,
            "Descripción": "ORGANIZAR CAB BASTI VER HD PAS P/INTERNA",
            "Cantidad": 3,
            "Pos NPA": 660
          },
          {
            "Cableado": "AC 64 HD DC",
            "Código": 5008280,
            "Descripción": "COLOCAR BASTI VER HD ACTIVO P/INTERNA",
            "Cantidad": 1,
            "Pos NPA": 220
          },
          {
            "Cableado": "AC 64 HD DC",
            "Código": 5013581,
            "Descripción": "ORGANIZAR CAB BASTI VER HD ACT P/INTERNA",
            "Cantidad": 1,
            "Pos NPA": 650
          },
          {
            "Cableado": "AC 64 HD DC",
            "Código": 5008286,
            "Descripción": "COLOCAR PASIVOS HD - PLANTA INTERNA",
            "Cantidad": 77,
            "Pos NPA": 280
          },
          {
            "Cableado": "AC 64 HD DC",
            "Código": 5008283,
            "Descripción": "COLOCAR BASTIDOR HORIZONTAL - P/INTERNA",
            "Cantidad": 0,
            "Pos NPA": 250
          },
          {
            "Cableado": "AC 64 HD DC",
            "Código": 5013583,
            "Descripción": "ORGANIZAR CABLES BASTIDOR HOR P/INTERNA",
            "Cantidad": 0,
            "Pos NPA": 670
          },
          {
            "Cableado": "AC 64 HD DC",
            "Código": 5008287,
            "Descripción": "COLOCAR SEPARADOR HORIZONTAL P/INTERNA",
            "Cantidad": 3,
            "Pos NPA": 290
          },
          {
            "Cableado": "AC 64 HD DC",
            "Código": 5008288,
            "Descripción": "COLOCAR TECHNETIX - PLANTA INTERNA",
            "Cantidad": 0,
            "Pos NPA": 300
          },
          {
            "Cableado": "AC 64 HD DC",
            "Código": 5013579,
            "Descripción": "ORGANIZAR CAB BASTI TECHNETIK P/INTERNA",
            "Cantidad": 0,
            "Pos NPA": 630
          },
          {
            "Cableado": "AC 96 SD",
            "Código": 5013985,
            "Descripción": "PREPARAR RACK 1000 MM O MAYOR P/INTERNA",
            "Cantidad": 2,
            "Pos NPA": 730
          },
          {
            "Cableado": "AC 96 SD",
            "Código": 5007437,
            "Descripción": "ARMADO DE CABLE DE CONEX RG-59 P/INTERNA",
            "Cantidad": 6,
            "Pos NPA": 120
          },
          {
            "Cableado": "AC 96 SD",
            "Código": 5015530,
            "Descripción": "TENDIDO CAB RG-59 ESTRUC BJA P/INTERNA",
            "Cantidad": 10,
            "Pos NPA": 780
          },
          {
            "Cableado": "AC 96 SD",
            "Código": 5015531,
            "Descripción": "TENDIDO CAB RG-59 ESTRUC RACK P/INTERNA",
            "Cantidad": 24,
            "Pos NPA": 790
          },
          {
            "Cableado": "AC 96 SD",
            "Código": 5007436,
            "Descripción": "ARMADO CAB DE CONEX MINICOAXIL P/INTERNA",
            "Cantidad": 160,
            "Pos NPA": 110
          },
          {
            "Cableado": "AC 96 SD",
            "Código": 5007436,
            "Descripción": "ARMADO CAB DE CONEX MINICOAXIL P/INTERNA",
            "Cantidad": 140,
            "Pos NPA": 110
          },
          {
            "Cableado": "AC 96 SD",
            "Código": 5015528,
            "Descripción": "TENDIDO CAB MINICO ESTRUC BJA P/INTERNA",
            "Cantidad": 0,
            "Pos NPA": 760
          },
          {
            "Cableado": "AC 96 SD",
            "Código": 5015529,
            "Descripción": "TENDIDO CAB MINICO ESTRUC RACK P/INTERNA",
            "Cantidad": 160,
            "Pos NPA": 770
          },
          {
            "Cableado": "AC 96 SD",
            "Código": 5015529,
            "Descripción": "TENDIDO CAB MINICO ESTRUC RACK P/INTERNA",
            "Cantidad": 128,
            "Pos NPA": 770
          },
          {
            "Cableado": "AC 96 SD",
            "Código": 5008284,
            "Descripción": "COLOCAR BASTIDOR VERTICAL - P/INTERNA",
            "Cantidad": 3,
            "Pos NPA": 260
          },
          {
            "Cableado": "AC 96 SD",
            "Código": 5013584,
            "Descripción": "ORGANIZAR CABLES BASTIDOR VER P/INTERNA",
            "Cantidad": 3,
            "Pos NPA": 680
          },
          {
            "Cableado": "AC 96 SD",
            "Código": 5008285,
            "Descripción": "COLOCAR PASIVOS BD - PLANTA INTERNA",
            "Cantidad": 58,
            "Pos NPA": 270
          },
          {
            "Cableado": "AC 96 SD",
            "Código": 5008283,
            "Descripción": "COLOCAR BASTIDOR HORIZONTAL - P/INTERNA",
            "Cantidad": 1,
            "Pos NPA": 250
          },
          {
            "Cableado": "AC 96 SD",
            "Código": 5013583,
            "Descripción": "ORGANIZAR CABLES BASTIDOR HOR P/INTERNA",
            "Cantidad": 1,
            "Pos NPA": 670
          },
          {
            "Cableado": "AC 96 SD",
            "Código": 5008287,
            "Descripción": "COLOCAR SEPARADOR HORIZONTAL P/INTERNA",
            "Cantidad": 7,
            "Pos NPA": 290
          },
          {
            "Cableado": "AC 96 SD",
            "Código": 5008288,
            "Descripción": "COLOCAR TECHNETIX - PLANTA INTERNA",
            "Cantidad": 4,
            "Pos NPA": 300
          },
          {
            "Cableado": "AC 96 SD",
            "Código": 5008288,
            "Descripción": "COLOCAR TECHNETIX - PLANTA INTERNA",
            "Cantidad": 1,
            "Pos NPA": 300
          },
          {
            "Cableado": "AC 96 SD",
            "Código": 5013579,
            "Descripción": "ORGANIZAR CAB BASTI TECHNETIK P/INTERNA",
            "Cantidad": 4,
            "Pos NPA": 630
          },
          {
            "Cableado": "AC 96 SD",
            "Código": 5013579,
            "Descripción": "ORGANIZAR CAB BASTI TECHNETIK P/INTERNA",
            "Cantidad": 1,
            "Pos NPA": 630
          },
          {
            "Cableado": "AC 96 HD DC",
            "Código": 5013985,
            "Descripción": "PREPARAR RACK 1000 MM O MAYOR P/INTERNA",
            "Cantidad": 2,
            "Pos NPA": 730
          },
          {
            "Cableado": "AC 96 HD DC",
            "Código": 5007437,
            "Descripción": "ARMADO DE CABLE DE CONEX RG-59 P/INTERNA",
            "Cantidad": 0,
            "Pos NPA": 120
          },
          {
            "Cableado": "AC 96 HD DC",
            "Código": 5015530,
            "Descripción": "TENDIDO CAB RG-59 ESTRUC BJA P/INTERNA",
            "Cantidad": 0,
            "Pos NPA": 780
          },
          {
            "Cableado": "AC 96 HD DC",
            "Código": 5015531,
            "Descripción": "TENDIDO CAB RG-59 ESTRUC RACK P/INTERNA",
            "Cantidad": 0,
            "Pos NPA": 790
          },
          {
            "Cableado": "AC 96 HD DC",
            "Código": 5007436,
            "Descripción": "ARMADO CAB DE CONEX MINICOAXIL P/INTERNA",
            "Cantidad": 160,
            "Pos NPA": 110
          },
          {
            "Cableado": "AC 96 HD DC",
            "Código": 5007436,
            "Descripción": "ARMADO CAB DE CONEX MINICOAXIL P/INTERNA",
            "Cantidad": 267,
            "Pos NPA": 110
          },
          {
            "Cableado": "AC 96 HD DC",
            "Código": 5015528,
            "Descripción": "TENDIDO CAB MINICO ESTRUC BJA P/INTERNA",
            "Cantidad": 4,
            "Pos NPA": 760
          },
          {
            "Cableado": "AC 96 HD DC",
            "Código": 5015529,
            "Descripción": "TENDIDO CAB MINICO ESTRUC RACK P/INTERNA",
            "Cantidad": 160,
            "Pos NPA": 770
          },
          {
            "Cableado": "AC 96 HD DC",
            "Código": 5015529,
            "Descripción": "TENDIDO CAB MINICO ESTRUC RACK P/INTERNA",
            "Cantidad": 56,
            "Pos NPA": 770
          },
          {
            "Cableado": "AC 96 HD DC",
            "Código": 5008281,
            "Descripción": "COLOCAR BASTI VER HD PASIVO P/INTERNA",
            "Cantidad": 5,
            "Pos NPA": 230
          },
          {
            "Cableado": "AC 96 HD DC",
            "Código": 5013582,
            "Descripción": "ORGANIZAR CAB BASTI VER HD PAS P/INTERNA",
            "Cantidad": 5,
            "Pos NPA": 660
          },
          {
            "Cableado": "AC 96 HD DC",
            "Código": 5008280,
            "Descripción": "COLOCAR BASTI VER HD ACTIVO P/INTERNA",
            "Cantidad": 1,
            "Pos NPA": 220
          },
          {
            "Cableado": "AC 96 HD DC",
            "Código": 5013581,
            "Descripción": "ORGANIZAR CAB BASTI VER HD ACT P/INTERNA",
            "Cantidad": 1,
            "Pos NPA": 650
          },
          {
            "Cableado": "AC 96 HD DC",
            "Código": 5008286,
            "Descripción": "COLOCAR PASIVOS HD - PLANTA INTERNA",
            "Cantidad": 113,
            "Pos NPA": 280
          },
          {
            "Cableado": "AC 96 HD DC",
            "Código": 5008283,
            "Descripción": "COLOCAR BASTIDOR HORIZONTAL - P/INTERNA",
            "Cantidad": 0,
            "Pos NPA": 250
          },
          {
            "Cableado": "AC 96 HD DC",
            "Código": 5013583,
            "Descripción": "ORGANIZAR CABLES BASTIDOR HOR P/INTERNA",
            "Cantidad": 0,
            "Pos NPA": 670
          },
          {
            "Cableado": "AC 96 HD DC",
            "Código": 5008287,
            "Descripción": "COLOCAR SEPARADOR HORIZONTAL P/INTERNA",
            "Cantidad": 4,
            "Pos NPA": 290
          },
          {
            "Cableado": "AC 96 HD DC",
            "Código": 5008288,
            "Descripción": "COLOCAR TECHNETIX - PLANTA INTERNA",
            "Cantidad": 0,
            "Pos NPA": 300
          },
          {
            "Cableado": "AC 96 HD DC",
            "Código": 5013579,
            "Descripción": "ORGANIZAR CAB BASTI TECHNETIK P/INTERNA",
            "Cantidad": 0,
            "Pos NPA": 630
          },
          {
            "Cableado": "Rack 120 TX",
            "Código": 5013986,
            "Descripción": "PREPARAR RACK 900 MM O MENOR P/INTERNA",
            "Cantidad": 1,
            "Pos NPA": 740
          },
          {
            "Cableado": "Rack 120 TX",
            "Código": 5007437,
            "Descripción": "ARMADO DE CABLE DE CONEX RG-59 P/INTERNA",
            "Cantidad": 0,
            "Pos NPA": 120
          },
          {
            "Cableado": "Rack 120 TX",
            "Código": 5015530,
            "Descripción": "TENDIDO CAB RG-59 ESTRUC BJA P/INTERNA",
            "Cantidad": 160,
            "Pos NPA": 780
          },
          {
            "Cableado": "Rack 120 TX",
            "Código": 5015530,
            "Descripción": "TENDIDO CAB RG-59 ESTRUC BJA P/INTERNA",
            "Cantidad": 80,
            "Pos NPA": 780
          },
          {
            "Cableado": "Rack 120 TX",
            "Código": 5015531,
            "Descripción": "TENDIDO CAB RG-59 ESTRUC RACK P/INTERNA",
            "Cantidad": 0,
            "Pos NPA": 790
          },
          {
            "Cableado": "Rack 120 TX",
            "Código": 5007436,
            "Descripción": "ARMADO CAB DE CONEX MINICOAXIL P/INTERNA",
            "Cantidad": 0,
            "Pos NPA": 110
          },
          {
            "Cableado": "Rack 120 TX",
            "Código": 5015528,
            "Descripción": "TENDIDO CAB MINICO ESTRUC BJA P/INTERNA",
            "Cantidad": 0,
            "Pos NPA": 760
          },
          {
            "Cableado": "Rack 120 TX",
            "Código": 5015529,
            "Descripción": "TENDIDO CAB MINICO ESTRUC RACK P/INTERNA",
            "Cantidad": 120,
            "Pos NPA": 770
          },
          {
            "Cableado": "Rack 120 TX",
            "Código": 5008281,
            "Descripción": "COLOCAR BASTI VER HD PASIVO P/INTERNA",
            "Cantidad": 0,
            "Pos NPA": 230
          },
          {
            "Cableado": "Rack 120 TX",
            "Código": 5013582,
            "Descripción": "ORGANIZAR CAB BASTI VER HD PAS P/INTERNA",
            "Cantidad": 0,
            "Pos NPA": 660
          },
          {
            "Cableado": "Rack 120 TX",
            "Código": 5008280,
            "Descripción": "COLOCAR BASTI VER HD ACTIVO P/INTERNA",
            "Cantidad": 0,
            "Pos NPA": 220
          },
          {
            "Cableado": "Rack 120 TX",
            "Código": 5013581,
            "Descripción": "ORGANIZAR CAB BASTI VER HD ACT P/INTERNA",
            "Cantidad": 0,
            "Pos NPA": 650
          },
          {
            "Cableado": "Rack 120 TX",
            "Código": 5008286,
            "Descripción": "COLOCAR PASIVOS HD - PLANTA INTERNA",
            "Cantidad": 0,
            "Pos NPA": 280
          },
          {
            "Cableado": "Rack 120 TX",
            "Código": 5008283,
            "Descripción": "COLOCAR BASTIDOR HORIZONTAL - P/INTERNA",
            "Cantidad": 0,
            "Pos NPA": 250
          },
          {
            "Cableado": "Rack 120 TX",
            "Código": 5013583,
            "Descripción": "ORGANIZAR CABLES BASTIDOR HOR P/INTERNA",
            "Cantidad": 0,
            "Pos NPA": 670
          },
          {
            "Cableado": "Rack 120 TX",
            "Código": 5008287,
            "Descripción": "COLOCAR SEPARADOR HORIZONTAL P/INTERNA",
            "Cantidad": 5,
            "Pos NPA": 290
          },
          {
            "Cableado": "Rack 120 TX",
            "Código": 5008288,
            "Descripción": "COLOCAR TECHNETIX - PLANTA INTERNA",
            "Cantidad": 4,
            "Pos NPA": 300
          },
          {
            "Cableado": "Rack 120 TX",
            "Código": 5008288,
            "Descripción": "COLOCAR TECHNETIX - PLANTA INTERNA",
            "Cantidad": 2,
            "Pos NPA": 300
          },
          {
            "Cableado": "Rack 120 TX",
            "Código": 5013579,
            "Descripción": "ORGANIZAR CAB BASTI TECHNETIK P/INTERNA",
            "Cantidad": 4,
            "Pos NPA": 630
          },
          {
            "Cableado": "Rack 120 TX",
            "Código": 5013579,
            "Descripción": "ORGANIZAR CAB BASTI TECHNETIK P/INTERNA",
            "Cantidad": 2,
            "Pos NPA": 630
          },
          {
            "Cableado": "Rack 80 TX",
            "Código": 5013986,
            "Descripción": "PREPARAR RACK 900 MM O MENOR P/INTERNA",
            "Cantidad": 1,
            "Pos NPA": 740
          },
          {
            "Cableado": "Rack 80 TX",
            "Código": 5007437,
            "Descripción": "ARMADO DE CABLE DE CONEX RG-59 P/INTERNA",
            "Cantidad": 0,
            "Pos NPA": 120
          },
          {
            "Cableado": "Rack 80 TX",
            "Código": 5015530,
            "Descripción": "TENDIDO CAB RG-59 ESTRUC BJA P/INTERNA",
            "Cantidad": 160,
            "Pos NPA": 780
          },
          {
            "Cableado": "Rack 80 TX",
            "Código": 5015531,
            "Descripción": "TENDIDO CAB RG-59 ESTRUC RACK P/INTERNA",
            "Cantidad": 0,
            "Pos NPA": 790
          },
          {
            "Cableado": "Rack 80 TX",
            "Código": 5007436,
            "Descripción": "ARMADO CAB DE CONEX MINICOAXIL P/INTERNA",
            "Cantidad": 0,
            "Pos NPA": 110
          },
          {
            "Cableado": "Rack 80 TX",
            "Código": 5015528,
            "Descripción": "TENDIDO CAB MINICO ESTRUC BJA P/INTERNA",
            "Cantidad": 0,
            "Pos NPA": 760
          },
          {
            "Cableado": "Rack 80 TX",
            "Código": 5015529,
            "Descripción": "TENDIDO CAB MINICO ESTRUC RACK P/INTERNA",
            "Cantidad": 80,
            "Pos NPA": 770
          },
          {
            "Cableado": "Rack 80 TX",
            "Código": 5008281,
            "Descripción": "COLOCAR BASTI VER HD PASIVO P/INTERNA",
            "Cantidad": 0,
            "Pos NPA": 230
          },
          {
            "Cableado": "Rack 80 TX",
            "Código": 5013582,
            "Descripción": "ORGANIZAR CAB BASTI VER HD PAS P/INTERNA",
            "Cantidad": 0,
            "Pos NPA": 660
          },
          {
            "Cableado": "Rack 80 TX",
            "Código": 5008280,
            "Descripción": "COLOCAR BASTI VER HD ACTIVO P/INTERNA",
            "Cantidad": 0,
            "Pos NPA": 220
          },
          {
            "Cableado": "Rack 80 TX",
            "Código": 5013581,
            "Descripción": "ORGANIZAR CAB BASTI VER HD ACT P/INTERNA",
            "Cantidad": 0,
            "Pos NPA": 650
          },
          {
            "Cableado": "Rack 80 TX",
            "Código": 5008286,
            "Descripción": "COLOCAR PASIVOS HD - PLANTA INTERNA",
            "Cantidad": 0,
            "Pos NPA": 280
          },
          {
            "Cableado": "Rack 80 TX",
            "Código": 5008283,
            "Descripción": "COLOCAR BASTIDOR HORIZONTAL - P/INTERNA",
            "Cantidad": 0,
            "Pos NPA": 250
          },
          {
            "Cableado": "Rack 80 TX",
            "Código": 5013583,
            "Descripción": "ORGANIZAR CABLES BASTIDOR HOR P/INTERNA",
            "Cantidad": 0,
            "Pos NPA": 670
          },
          {
            "Cableado": "Rack 80 TX",
            "Código": 5008287,
            "Descripción": "COLOCAR SEPARADOR HORIZONTAL P/INTERNA",
            "Cantidad": 5,
            "Pos NPA": 290
          },
          {
            "Cableado": "Rack 80 TX",
            "Código": 5008288,
            "Descripción": "COLOCAR TECHNETIX - PLANTA INTERNA",
            "Cantidad": 4,
            "Pos NPA": 300
          },
          {
            "Cableado": "Rack 80 TX",
            "Código": 5013579,
            "Descripción": "ORGANIZAR CAB BASTI TECHNETIK P/INTERNA",
            "Cantidad": 4,
            "Pos NPA": 630
          },
          {
            "Cableado": "Cables RX-MTZ (120)",
            "Código": 5015530,
            "Descripción": "TENDIDO CAB RG-59 ESTRUC BJA P/INTERNA",
            "Cantidad": 120,
            "Pos NPA": 780
          },
          {
            "Cableado": "Cables RX-MTZ (120)",
            "Código": 5013984,
            "Descripción": "PREPARAR ACRÍLICO MATRIZ CMTS P/INTERNA",
            "Cantidad": 1,
            "Pos NPA": 720
          },
          {
            "Cableado": "Cables RX-MTZ (96)",
            "Código": 5015530,
            "Descripción": "TENDIDO CAB RG-59 ESTRUC BJA P/INTERNA",
            "Cantidad": 96,
            "Pos NPA": 780
          },
          {
            "Cableado": "Cables RX-MTZ (96)",
            "Código": 5013984,
            "Descripción": "PREPARAR ACRÍLICO MATRIZ CMTS P/INTERNA",
            "Cantidad": 1,
            "Pos NPA": 720
          },
          {
            "Cableado": "AC 64 HD DC s/VOD",
            "Código": 5013985,
            "Descripción": "PREPARAR RACK 1000 MM O MAYOR P/INTERNA",
            "Cantidad": 1,
            "Pos NPA": 730
          },
          {
            "Cableado": "AC 64 HD DC s/VOD",
            "Código": 5007437,
            "Descripción": "ARMADO DE CABLE DE CONEX RG-59 P/INTERNA",
            "Cantidad": 0,
            "Pos NPA": 120
          },
          {
            "Cableado": "AC 64 HD DC s/VOD",
            "Código": 5015530,
            "Descripción": "TENDIDO CAB RG-59 ESTRUC BJA P/INTERNA",
            "Cantidad": 0,
            "Pos NPA": 780
          },
          {
            "Cableado": "AC 64 HD DC s/VOD",
            "Código": 5015531,
            "Descripción": "TENDIDO CAB RG-59 ESTRUC RACK P/INTERNA",
            "Cantidad": 0,
            "Pos NPA": 790
          },
          {
            "Cableado": "AC 64 HD DC s/VOD",
            "Código": 5007436,
            "Descripción": "ARMADO CAB DE CONEX MINICOAXIL P/INTERNA",
            "Cantidad": 160,
            "Pos NPA": 110
          },
          {
            "Cableado": "AC 64 HD DC s/VOD",
            "Código": 5007436,
            "Descripción": "ARMADO CAB DE CONEX MINICOAXIL P/INTERNA",
            "Cantidad": 130,
            "Pos NPA": 110
          },
          {
            "Cableado": "AC 64 HD DC s/VOD",
            "Código": 5015528,
            "Descripción": "TENDIDO CAB MINICO ESTRUC BJA P/INTERNA",
            "Cantidad": 2,
            "Pos NPA": 760
          },
          {
            "Cableado": "AC 64 HD DC s/VOD",
            "Código": 5015529,
            "Descripción": "TENDIDO CAB MINICO ESTRUC RACK P/INTERNA",
            "Cantidad": 120,
            "Pos NPA": 770
          },
          {
            "Cableado": "AC 64 HD DC s/VOD",
            "Código": 5008281,
            "Descripción": "COLOCAR BASTI VER HD PASIVO P/INTERNA",
            "Cantidad": 3,
            "Pos NPA": 230
          },
          {
            "Cableado": "AC 64 HD DC s/VOD",
            "Código": 5013582,
            "Descripción": "ORGANIZAR CAB BASTI VER HD PAS P/INTERNA",
            "Cantidad": 3,
            "Pos NPA": 660
          },
          {
            "Cableado": "AC 64 HD DC s/VOD",
            "Código": 5008280,
            "Descripción": "COLOCAR BASTI VER HD ACTIVO P/INTERNA",
            "Cantidad": 1,
            "Pos NPA": 220
          },
          {
            "Cableado": "AC 64 HD DC s/VOD",
            "Código": 5013581,
            "Descripción": "ORGANIZAR CAB BASTI VER HD ACT P/INTERNA",
            "Cantidad": 1,
            "Pos NPA": 650
          },
          {
            "Cableado": "AC 64 HD DC s/VOD",
            "Código": 5008286,
            "Descripción": "COLOCAR PASIVOS HD - PLANTA INTERNA",
            "Cantidad": 74,
            "Pos NPA": 280
          },
          {
            "Cableado": "AC 64 HD DC s/VOD",
            "Código": 5008283,
            "Descripción": "COLOCAR BASTIDOR HORIZONTAL - P/INTERNA",
            "Cantidad": 0,
            "Pos NPA": 250
          },
          {
            "Cableado": "AC 64 HD DC s/VOD",
            "Código": 5013583,
            "Descripción": "ORGANIZAR CABLES BASTIDOR HOR P/INTERNA",
            "Cantidad": 0,
            "Pos NPA": 670
          },
          {
            "Cableado": "AC 64 HD DC s/VOD",
            "Código": 5008287,
            "Descripción": "COLOCAR SEPARADOR HORIZONTAL P/INTERNA",
            "Cantidad": 3,
            "Pos NPA": 290
          },
          {
            "Cableado": "AC 64 HD DC s/VOD",
            "Código": 5008288,
            "Descripción": "COLOCAR TECHNETIX - PLANTA INTERNA",
            "Cantidad": 0,
            "Pos NPA": 300
          },
          {
            "Cableado": "AC 64 HD DC s/VOD",
            "Código": 5013579,
            "Descripción": "ORGANIZAR CAB BASTI TECHNETIK P/INTERNA",
            "Cantidad": 0,
            "Pos NPA": 630
          },
          {
            "Cableado": "AC 112 SD s/VOD",
            "Código": 5013985,
            "Descripción": "PREPARAR RACK 1000 MM O MAYOR P/INTERNA",
            "Cantidad": 2,
            "Pos NPA": 730
          },
          {
            "Cableado": "AC 112 SD s/VOD",
            "Código": 5007437,
            "Descripción": "ARMADO DE CABLE DE CONEX RG-59 P/INTERNA",
            "Cantidad": 32,
            "Pos NPA": 120
          },
          {
            "Cableado": "AC 112 SD s/VOD",
            "Código": 5015530,
            "Descripción": "TENDIDO CAB RG-59 ESTRUC BJA P/INTERNA",
            "Cantidad": 12,
            "Pos NPA": 780
          },
          {
            "Cableado": "AC 112 SD s/VOD",
            "Código": 5015531,
            "Descripción": "TENDIDO CAB RG-59 ESTRUC RACK P/INTERNA",
            "Cantidad": 0,
            "Pos NPA": 790
          },
          {
            "Cableado": "AC 112 SD s/VOD",
            "Código": 5007436,
            "Descripción": "ARMADO CAB DE CONEX MINICOAXIL P/INTERNA",
            "Cantidad": 160,
            "Pos NPA": 110
          },
          {
            "Cableado": "AC 112 SD s/VOD",
            "Código": 5007436,
            "Descripción": "ARMADO CAB DE CONEX MINICOAXIL P/INTERNA",
            "Cantidad": 64,
            "Pos NPA": 110
          },
          {
            "Cableado": "AC 112 SD s/VOD",
            "Código": 5015528,
            "Descripción": "TENDIDO CAB MINICO ESTRUC BJA P/INTERNA",
            "Cantidad": 0,
            "Pos NPA": 760
          },
          {
            "Cableado": "AC 112 SD s/VOD",
            "Código": 5015529,
            "Descripción": "TENDIDO CAB MINICO ESTRUC RACK P/INTERNA",
            "Cantidad": 160,
            "Pos NPA": 770
          },
          {
            "Cableado": "AC 112 SD s/VOD",
            "Código": 5015529,
            "Descripción": "TENDIDO CAB MINICO ESTRUC RACK P/INTERNA",
            "Cantidad": 176,
            "Pos NPA": 770
          },
          {
            "Cableado": "AC 112 SD s/VOD",
            "Código": 5008284,
            "Descripción": "COLOCAR BASTIDOR VERTICAL - P/INTERNA",
            "Cantidad": 4,
            "Pos NPA": 260
          },
          {
            "Cableado": "AC 112 SD s/VOD",
            "Código": 5013584,
            "Descripción": "ORGANIZAR CABLES BASTIDOR VER P/INTERNA",
            "Cantidad": 4,
            "Pos NPA": 680
          },
          {
            "Cableado": "AC 112 SD s/VOD",
            "Código": 5008285,
            "Descripción": "COLOCAR PASIVOS BD - PLANTA INTERNA",
            "Cantidad": 72,
            "Pos NPA": 270
          },
          {
            "Cableado": "AC 112 SD s/VOD",
            "Código": 5008283,
            "Descripción": "COLOCAR BASTIDOR HORIZONTAL - P/INTERNA",
            "Cantidad": 0,
            "Pos NPA": 250
          },
          {
            "Cableado": "AC 112 SD s/VOD",
            "Código": 5013583,
            "Descripción": "ORGANIZAR CABLES BASTIDOR HOR P/INTERNA",
            "Cantidad": 0,
            "Pos NPA": 670
          },
          {
            "Cableado": "AC 112 SD s/VOD",
            "Código": 5008287,
            "Descripción": "COLOCAR SEPARADOR HORIZONTAL P/INTERNA",
            "Cantidad": 5,
            "Pos NPA": 290
          },
          {
            "Cableado": "AC 112 SD s/VOD",
            "Código": 5008288,
            "Descripción": "COLOCAR TECHNETIX - PLANTA INTERNA",
            "Cantidad": 3,
            "Pos NPA": 300
          },
          {
            "Cableado": "AC 112 SD s/VOD",
            "Código": 5013579,
            "Descripción": "ORGANIZAR CAB BASTI TECHNETIK P/INTERNA",
            "Cantidad": 3,
            "Pos NPA": 630
          },
          {
            "Cableado": "AC 56 HD DC",
            "Código": 5013985,
            "Descripción": "PREPARAR RACK 1000 MM O MAYOR P/INTERNA",
            "Cantidad": 1,
            "Pos NPA": 730
          },
          {
            "Cableado": "AC 56 HD DC",
            "Código": 5007437,
            "Descripción": "ARMADO DE CABLE DE CONEX RG-59 P/INTERNA",
            "Cantidad": 0,
            "Pos NPA": 120
          },
          {
            "Cableado": "AC 56 HD DC",
            "Código": 5015530,
            "Descripción": "TENDIDO CAB RG-59 ESTRUC BJA P/INTERNA",
            "Cantidad": 0,
            "Pos NPA": 780
          },
          {
            "Cableado": "AC 56 HD DC",
            "Código": 5015531,
            "Descripción": "TENDIDO CAB RG-59 ESTRUC RACK P/INTERNA",
            "Cantidad": 0,
            "Pos NPA": 790
          },
          {
            "Cableado": "AC 56 HD DC",
            "Código": 5007436,
            "Descripción": "ARMADO CAB DE CONEX MINICOAXIL P/INTERNA",
            "Cantidad": 160,
            "Pos NPA": 110
          },
          {
            "Cableado": "AC 56 HD DC",
            "Código": 5007436,
            "Descripción": "ARMADO CAB DE CONEX MINICOAXIL P/INTERNA",
            "Cantidad": 67,
            "Pos NPA": 110
          },
          {
            "Cableado": "AC 56 HD DC",
            "Código": 5015528,
            "Descripción": "TENDIDO CAB MINICO ESTRUC BJA P/INTERNA",
            "Cantidad": 2,
            "Pos NPA": 760
          },
          {
            "Cableado": "AC 56 HD DC",
            "Código": 5015529,
            "Descripción": "TENDIDO CAB MINICO ESTRUC RACK P/INTERNA",
            "Cantidad": 118,
            "Pos NPA": 770
          },
          {
            "Cableado": "AC 56 HD DC",
            "Código": 5008281,
            "Descripción": "COLOCAR BASTI VER HD PASIVO P/INTERNA",
            "Cantidad": 3,
            "Pos NPA": 230
          },
          {
            "Cableado": "AC 56 HD DC",
            "Código": 5013582,
            "Descripción": "ORGANIZAR CAB BASTI VER HD PAS P/INTERNA",
            "Cantidad": 3,
            "Pos NPA": 660
          },
          {
            "Cableado": "AC 56 HD DC",
            "Código": 5008280,
            "Descripción": "COLOCAR BASTI VER HD ACTIVO P/INTERNA",
            "Cantidad": 1,
            "Pos NPA": 220
          },
          {
            "Cableado": "AC 56 HD DC",
            "Código": 5013581,
            "Descripción": "ORGANIZAR CAB BASTI VER HD ACT P/INTERNA",
            "Cantidad": 1,
            "Pos NPA": 650
          },
          {
            "Cableado": "AC 56 HD DC",
            "Código": 5008286,
            "Descripción": "COLOCAR PASIVOS HD - PLANTA INTERNA",
            "Cantidad": 68,
            "Pos NPA": 280
          },
          {
            "Cableado": "AC 56 HD DC",
            "Código": 5008283,
            "Descripción": "COLOCAR BASTIDOR HORIZONTAL - P/INTERNA",
            "Cantidad": 0,
            "Pos NPA": 250
          },
          {
            "Cableado": "AC 56 HD DC",
            "Código": 5013583,
            "Descripción": "ORGANIZAR CABLES BASTIDOR HOR P/INTERNA",
            "Cantidad": 0,
            "Pos NPA": 670
          },
          {
            "Cableado": "AC 56 HD DC",
            "Código": 5008287,
            "Descripción": "COLOCAR SEPARADOR HORIZONTAL P/INTERNA",
            "Cantidad": 3,
            "Pos NPA": 290
          },
          {
            "Cableado": "AC 56 HD DC",
            "Código": 5008288,
            "Descripción": "COLOCAR TECHNETIX - PLANTA INTERNA",
            "Cantidad": 0,
            "Pos NPA": 300
          },
          {
            "Cableado": "AC 56 HD DC",
            "Código": 5013579,
            "Descripción": "ORGANIZAR CAB BASTI TECHNETIK P/INTERNA",
            "Cantidad": 0,
            "Pos NPA": 630
          },
          {
            "Cableado": "AC 56 HD DC s/VOD",
            "Código": 5013985,
            "Descripción": "PREPARAR RACK 1000 MM O MAYOR P/INTERNA",
            "Cantidad": 1,
            "Pos NPA": 730
          },
          {
            "Cableado": "AC 56 HD DC s/VOD",
            "Código": 5007437,
            "Descripción": "ARMADO DE CABLE DE CONEX RG-59 P/INTERNA",
            "Cantidad": 0,
            "Pos NPA": 120
          },
          {
            "Cableado": "AC 56 HD DC s/VOD",
            "Código": 5015530,
            "Descripción": "TENDIDO CAB RG-59 ESTRUC BJA P/INTERNA",
            "Cantidad": 0,
            "Pos NPA": 780
          },
          {
            "Cableado": "AC 56 HD DC s/VOD",
            "Código": 5015531,
            "Descripción": "TENDIDO CAB RG-59 ESTRUC RACK P/INTERNA",
            "Cantidad": 0,
            "Pos NPA": 790
          },
          {
            "Cableado": "AC 56 HD DC s/VOD",
            "Código": 5007436,
            "Descripción": "ARMADO CAB DE CONEX MINICOAXIL P/INTERNA",
            "Cantidad": 160,
            "Pos NPA": 110
          },
          {
            "Cableado": "AC 56 HD DC s/VOD",
            "Código": 5007436,
            "Descripción": "ARMADO CAB DE CONEX MINICOAXIL P/INTERNA",
            "Cantidad": 59,
            "Pos NPA": 110
          },
          {
            "Cableado": "AC 56 HD DC s/VOD",
            "Código": 5015528,
            "Descripción": "TENDIDO CAB MINICO ESTRUC BJA P/INTERNA",
            "Cantidad": 2,
            "Pos NPA": 760
          },
          {
            "Cableado": "AC 56 HD DC s/VOD",
            "Código": 5015529,
            "Descripción": "TENDIDO CAB MINICO ESTRUC RACK P/INTERNA",
            "Cantidad": 118,
            "Pos NPA": 770
          },
          {
            "Cableado": "AC 56 HD DC s/VOD",
            "Código": 5008281,
            "Descripción": "COLOCAR BASTI VER HD PASIVO P/INTERNA",
            "Cantidad": 3,
            "Pos NPA": 230
          },
          {
            "Cableado": "AC 56 HD DC s/VOD",
            "Código": 5013582,
            "Descripción": "ORGANIZAR CAB BASTI VER HD PAS P/INTERNA",
            "Cantidad": 3,
            "Pos NPA": 660
          },
          {
            "Cableado": "AC 56 HD DC s/VOD",
            "Código": 5008280,
            "Descripción": "COLOCAR BASTI VER HD ACTIVO P/INTERNA",
            "Cantidad": 1,
            "Pos NPA": 220
          },
          {
            "Cableado": "AC 56 HD DC s/VOD",
            "Código": 5013581,
            "Descripción": "ORGANIZAR CAB BASTI VER HD ACT P/INTERNA",
            "Cantidad": 1,
            "Pos NPA": 650
          },
          {
            "Cableado": "AC 56 HD DC s/VOD",
            "Código": 5008286,
            "Descripción": "COLOCAR PASIVOS HD - PLANTA INTERNA",
            "Cantidad": 66,
            "Pos NPA": 280
          },
          {
            "Cableado": "AC 56 HD DC s/VOD",
            "Código": 5008283,
            "Descripción": "COLOCAR BASTIDOR HORIZONTAL - P/INTERNA",
            "Cantidad": 0,
            "Pos NPA": 250
          },
          {
            "Cableado": "AC 56 HD DC s/VOD",
            "Código": 5013583,
            "Descripción": "ORGANIZAR CABLES BASTIDOR HOR P/INTERNA",
            "Cantidad": 0,
            "Pos NPA": 670
          },
          {
            "Cableado": "AC 56 HD DC s/VOD",
            "Código": 5008287,
            "Descripción": "COLOCAR SEPARADOR HORIZONTAL P/INTERNA",
            "Cantidad": 3,
            "Pos NPA": 290
          },
          {
            "Cableado": "AC 56 HD DC s/VOD",
            "Código": 5008288,
            "Descripción": "COLOCAR TECHNETIX - PLANTA INTERNA",
            "Cantidad": 0,
            "Pos NPA": 300
          },
          {
            "Cableado": "AC 56 HD DC s/VOD",
            "Código": 5013579,
            "Descripción": "ORGANIZAR CAB BASTI TECHNETIK P/INTERNA",
            "Cantidad": 0,
            "Pos NPA": 630
          },
          {
            "Cableado": "Rack 120 RX PBN",
            "Código": 5013986,
            "Descripción": "PREPARAR RACK 900 MM O MENOR P/INTERNA",
            "Cantidad": 1,
            "Pos NPA": 740
          },
          {
            "Cableado": "Rack 120 RX PBN",
            "Código": 5015531,
            "Descripción": "TENDIDO CAB RG-59 ESTRUC RACK P/INTERNA",
            "Cantidad": 270,
            "Pos NPA": 790
          },
          {
            "Cableado": "Rack 120 RX PBN",
            "Código": 5015530,
            "Descripción": "TENDIDO CAB RG-59 ESTRUC BJA P/INTERNA",
            "Cantidad": 120,
            "Pos NPA": 780
          },
          {
            "Cableado": "Rack 120 RX PBN",
            "Código": 5008284,
            "Descripción": "COLOCAR BASTIDOR VERTICAL - P/INTERNA",
            "Cantidad": 3,
            "Pos NPA": 260
          },
          {
            "Cableado": "Rack 120 RX PBN",
            "Código": 5013584,
            "Descripción": "ORGANIZAR CABLES BASTIDOR VER P/INTERNA",
            "Cantidad": 3,
            "Pos NPA": 680
          },
          {
            "Cableado": "Rack 120 RX PBN",
            "Código": 5008287,
            "Descripción": "COLOCAR SEPARADOR HORIZONTAL P/INTERNA",
            "Cantidad": 18,
            "Pos NPA": 290
          },
          {
            "Cableado": "Rack 120 RX PBN",
            "Código": 5008285,
            "Descripción": "COLOCAR PASIVOS BD - PLANTA INTERNA",
            "Cantidad": 55,
            "Pos NPA": 270
          },
          {
            "Cableado": "Rack 16 CH Ana",
            "Código": 5013986,
            "Descripción": "PREPARAR RACK 900 MM O MENOR P/INTERNA",
            "Cantidad": 1,
            "Pos NPA": 740
          },
          {
            "Cableado": "Rack 16 CH Ana",
            "Código": 5008282,
            "Descripción": "COLOCAR BASTI VERTICAL ACTIVO P/INTERNA",
            "Cantidad": 1,
            "Pos NPA": 240
          },
          {
            "Cableado": "Rack 16 CH Ana",
            "Código": 5015531,
            "Descripción": "TENDIDO CAB RG-59 ESTRUC RACK P/INTERNA",
            "Cantidad": 32,
            "Pos NPA": 790
          },
          {
            "Cableado": "Rack 16 CH Ana",
            "Código": 5007436,
            "Descripción": "ARMADO CAB DE CONEX MINICOAXIL P/INTERNA",
            "Cantidad": 32,
            "Pos NPA": 110
          },
          {
            "Cableado": "Rack 16 CH Ana",
            "Código": 5008283,
            "Descripción": "COLOCAR BASTIDOR HORIZONTAL - P/INTERNA",
            "Cantidad": 1,
            "Pos NPA": 250
          },
          {
            "Cableado": "Rack 16 CH Ana",
            "Código": 5008285,
            "Descripción": "COLOCAR PASIVOS BD - PLANTA INTERNA",
            "Cantidad": 2,
            "Pos NPA": 270
          },
          {
            "Cableado": "AC 224 HD DC",
            "Código": 5013985,
            "Descripción": "PREPARAR RACK 1000 MM O MAYOR P/INTERNA",
            "Cantidad": 3,
            "Pos NPA": 730
          },
          {
            "Cableado": "AC 224 HD DC",
            "Código": 5007436,
            "Descripción": "ARMADO CAB DE CONEX MINICOAXIL P/INTERNA",
            "Cantidad": 930,
            "Pos NPA": 110
          },
          {
            "Cableado": "AC 224 HD DC",
            "Código": 5015528,
            "Descripción": "TENDIDO CAB MINICO ESTRUC BJA P/INTERNA",
            "Cantidad": 358,
            "Pos NPA": 760
          },
          {
            "Cableado": "AC 224 HD DC",
            "Código": 5015529,
            "Descripción": "TENDIDO CAB MINICO ESTRUC RACK P/INTERNA",
            "Cantidad": 266,
            "Pos NPA": 770
          },
          {
            "Cableado": "AC 224 HD DC",
            "Código": 5008281,
            "Descripción": "COLOCAR BASTI VER HD PASIVO P/INTERNA",
            "Cantidad": 13,
            "Pos NPA": 230
          },
          {
            "Cableado": "AC 224 HD DC",
            "Código": 5013582,
            "Descripción": "ORGANIZAR CAB BASTI VER HD PAS P/INTERNA",
            "Cantidad": 13,
            "Pos NPA": 660
          },
          {
            "Cableado": "AC 224 HD DC",
            "Código": 5008280,
            "Descripción": "COLOCAR BASTI VER HD ACTIVO P/INTERNA",
            "Cantidad": 4,
            "Pos NPA": 220
          },
          {
            "Cableado": "AC 224 HD DC",
            "Código": 5013581,
            "Descripción": "ORGANIZAR CAB BASTI VER HD ACT P/INTERNA",
            "Cantidad": 4,
            "Pos NPA": 650
          },
          {
            "Cableado": "AC 224 HD DC",
            "Código": 5008286,
            "Descripción": "COLOCAR PASIVOS HD - PLANTA INTERNA",
            "Cantidad": 301,
            "Pos NPA": 280
          },
          {
            "Cableado": "AC 224 HD DC",
            "Código": 5008283,
            "Descripción": "COLOCAR BASTIDOR HORIZONTAL - P/INTERNA",
            "Cantidad": 2,
            "Pos NPA": 250
          },
          {
            "Cableado": "AC 224 HD DC",
            "Código": 5013583,
            "Descripción": "ORGANIZAR CABLES BASTIDOR HOR P/INTERNA",
            "Cantidad": 2,
            "Pos NPA": 670
          },
          {
            "Cableado": "AC 224 HD DC",
            "Código": 5008287,
            "Descripción": "COLOCAR SEPARADOR HORIZONTAL P/INTERNA",
            "Cantidad": 10,
            "Pos NPA": 290
          },
          {
            "Cableado": "AC 112 HD DC VODx32",
            "Código": 5013985,
            "Descripción": "PREPARAR RACK 1000 MM O MAYOR P/INTERNA",
            "Cantidad": 2,
            "Pos NPA": 730
          },
          {
            "Cableado": "AC 112 HD DC VODx32",
            "Código": 5007436,
            "Descripción": "ARMADO CAB DE CONEX MINICOAXIL P/INTERNA",
            "Cantidad": 459,
            "Pos NPA": 110
          },
          {
            "Cableado": "AC 112 HD DC VODx32",
            "Código": 5015528,
            "Descripción": "TENDIDO CAB MINICO ESTRUC BJA P/INTERNA",
            "Cantidad": 179,
            "Pos NPA": 760
          },
          {
            "Cableado": "AC 112 HD DC VODx32",
            "Código": 5015529,
            "Descripción": "TENDIDO CAB MINICO ESTRUC RACK P/INTERNA",
            "Cantidad": 55,
            "Pos NPA": 770
          },
          {
            "Cableado": "AC 112 HD DC VODx32",
            "Código": 5008281,
            "Descripción": "COLOCAR BASTI VER HD PASIVO P/INTERNA",
            "Cantidad": 5,
            "Pos NPA": 230
          },
          {
            "Cableado": "AC 112 HD DC VODx32",
            "Código": 5013582,
            "Descripción": "ORGANIZAR CAB BASTI VER HD PAS P/INTERNA",
            "Cantidad": 5,
            "Pos NPA": 660
          },
          {
            "Cableado": "AC 112 HD DC VODx32",
            "Código": 5008280,
            "Descripción": "COLOCAR BASTI VER HD ACTIVO P/INTERNA",
            "Cantidad": 2,
            "Pos NPA": 220
          },
          {
            "Cableado": "AC 112 HD DC VODx32",
            "Código": 5013581,
            "Descripción": "ORGANIZAR CAB BASTI VER HD ACT P/INTERNA",
            "Cantidad": 2,
            "Pos NPA": 650
          },
          {
            "Cableado": "AC 112 HD DC VODx32",
            "Código": 5008286,
            "Descripción": "COLOCAR PASIVOS HD - PLANTA INTERNA",
            "Cantidad": 122,
            "Pos NPA": 280
          },
          {
            "Cableado": "AC 112 HD DC VODx32",
            "Código": 5008283,
            "Descripción": "COLOCAR BASTIDOR HORIZONTAL - P/INTERNA",
            "Cantidad": 1,
            "Pos NPA": 250
          },
          {
            "Cableado": "AC 112 HD DC VODx32",
            "Código": 5013583,
            "Descripción": "ORGANIZAR CABLES BASTIDOR HOR P/INTERNA",
            "Cantidad": 1,
            "Pos NPA": 670
          },
          {
            "Cableado": "AC 112 HD DC VODx32",
            "Código": 5008287,
            "Descripción": "COLOCAR SEPARADOR HORIZONTAL P/INTERNA",
            "Cantidad": 5,
            "Pos NPA": 290
          },
          {
            "Cableado": "AC 112 UHD VOD",
            "Código": 5013985,
            "Descripción": "PREPARAR RACK 1000 MM O MAYOR P/INTERNA",
            "Cantidad": 1,
            "Pos NPA": 730
          },
          {
            "Cableado": "AC 112 UHD VOD",
            "Código": 5015530,
            "Descripción": "TENDIDO CAB RG-59 ESTRUC BJA P/INTERNA",
            "Cantidad": 2,
            "Pos NPA": 780
          },
          {
            "Cableado": "AC 112 UHD VOD",
            "Código": 5007436,
            "Descripción": "ARMADO CAB DE CONEX MINICOAXIL P/INTERNA",
            "Cantidad": 10,
            "Pos NPA": 110
          },
          {
            "Cableado": "AC 112 UHD VOD",
            "Código": 5015529,
            "Descripción": "TENDIDO CAB MINICO ESTRUC RACK P/INTERNA",
            "Cantidad": 341,
            "Pos NPA": 770
          },
          {
            "Cableado": "AC 112 UHD VOD",
            "Código": 5008281,
            "Descripción": "COLOCAR BASTI VER HD PASIVO P/INTERNA",
            "Cantidad": 1,
            "Pos NPA": 230
          },
          {
            "Cableado": "AC 112 UHD VOD",
            "Código": 5013582,
            "Descripción": "ORGANIZAR CAB BASTI VER HD PAS P/INTERNA",
            "Cantidad": 1,
            "Pos NPA": 660
          },
          {
            "Cableado": "AC 112 UHD VOD",
            "Código": 5008280,
            "Descripción": "COLOCAR BASTI VER HD ACTIVO P/INTERNA",
            "Cantidad": 0,
            "Pos NPA": 220
          },
          {
            "Cableado": "AC 112 UHD VOD",
            "Código": 5013581,
            "Descripción": "ORGANIZAR CAB BASTI VER HD ACT P/INTERNA",
            "Cantidad": 0,
            "Pos NPA": 650
          },
          {
            "Cableado": "AC 112 UHD VOD",
            "Código": 5008286,
            "Descripción": "COLOCAR PASIVOS HD - PLANTA INTERNA",
            "Cantidad": 26,
            "Pos NPA": 280
          },
          {
            "Cableado": "AC 112 UHD VOD",
            "Código": 5008283,
            "Descripción": "COLOCAR BASTIDOR HORIZONTAL - P/INTERNA",
            "Cantidad": 1,
            "Pos NPA": 250
          },
          {
            "Cableado": "AC 112 UHD VOD",
            "Código": 5013583,
            "Descripción": "ORGANIZAR CABLES BASTIDOR HOR P/INTERNA",
            "Cantidad": 1,
            "Pos NPA": 670
          },
          {
            "Cableado": "AC 112 UHD VOD",
            "Código": 5008287,
            "Descripción": "COLOCAR SEPARADOR HORIZONTAL P/INTERNA",
            "Cantidad": 5,
            "Pos NPA": 290
          },
          {
            "Cableado": "AC 112 UHD VOD",
            "Código": 5010547,
            "Descripción": "INSTALACIÓN MULTIPATCH MPO(24) P/INTERNA",
            "Cantidad": 1,
            "Pos NPA": 520
          },
          {
            "Cableado": "AC 112 UHD VOD",
            "Código": 5010547,
            "Descripción": "INSTALACIÓN MULTIPATCH MPO(24) P/INTERNA",
            "Cantidad": 1,
            "Pos NPA": 520
          },
          {
            "Cableado": "AC 112 UHD VOD",
            "Código": 5010549,
            "Descripción": "INSTALACIÓN MULTIPATCH MPO(48) P/INTERNA",
            "Cantidad": 1.7,
            "Pos NPA": 540
          },
          {
            "Cableado": "AC 112 UHD VOD",
            "Código": 5010550,
            "Descripción": "INSTALACIÓN MULTIPATCH MPO(72) P/INTERNA",
            "Cantidad": 1.7,
            "Pos NPA": 550
          },
          {
            "Cableado": "AC 112 UHD VOD",
            "Código": 5010530,
            "Descripción": "INSTALACIÓN E IMPACTADO DE 6 UTP",
            "Cantidad": 1.75,
            "Pos NPA": 480
          },
          {
            "Cableado": "AC 112 UHD VOD",
            "Código": 5010334,
            "Descripción": "INST. 2 CANALES ENERGÍA RACK/CABLE/PAT",
            "Cantidad": 2,
            "Pos NPA": 360
          },
          {
            "Cableado": "AC 96 UHD VOD",
            "Código": 5013985,
            "Descripción": "PREPARAR RACK 1000 MM O MAYOR P/INTERNA",
            "Cantidad": 1,
            "Pos NPA": 730
          },
          {
            "Cableado": "AC 96 UHD VOD",
            "Código": 5015530,
            "Descripción": "TENDIDO CAB RG-59 ESTRUC BJA P/INTERNA",
            "Cantidad": 2,
            "Pos NPA": 780
          },
          {
            "Cableado": "AC 96 UHD VOD",
            "Código": 5007436,
            "Descripción": "ARMADO CAB DE CONEX MINICOAXIL P/INTERNA",
            "Cantidad": 9,
            "Pos NPA": 110
          },
          {
            "Cableado": "AC 96 UHD VOD",
            "Código": 5015529,
            "Descripción": "TENDIDO CAB MINICO ESTRUC RACK P/INTERNA",
            "Cantidad": 315,
            "Pos NPA": 770
          },
          {
            "Cableado": "AC 96 UHD VOD",
            "Código": 5008281,
            "Descripción": "COLOCAR BASTI VER HD PASIVO P/INTERNA",
            "Cantidad": 1,
            "Pos NPA": 230
          },
          {
            "Cableado": "AC 96 UHD VOD",
            "Código": 5013582,
            "Descripción": "ORGANIZAR CAB BASTI VER HD PAS P/INTERNA",
            "Cantidad": 1,
            "Pos NPA": 660
          },
          {
            "Cableado": "AC 96 UHD VOD",
            "Código": 5008280,
            "Descripción": "COLOCAR BASTI VER HD ACTIVO P/INTERNA",
            "Cantidad": 1,
            "Pos NPA": 220
          },
          {
            "Cableado": "AC 96 UHD VOD",
            "Código": 5013581,
            "Descripción": "ORGANIZAR CAB BASTI VER HD ACT P/INTERNA",
            "Cantidad": 1,
            "Pos NPA": 650
          },
          {
            "Cableado": "AC 96 UHD VOD",
            "Código": 5008286,
            "Descripción": "COLOCAR PASIVOS HD - PLANTA INTERNA",
            "Cantidad": 37,
            "Pos NPA": 280
          },
          {
            "Cableado": "AC 96 UHD VOD",
            "Código": 5008283,
            "Descripción": "COLOCAR BASTIDOR HORIZONTAL - P/INTERNA",
            "Cantidad": 0,
            "Pos NPA": 250
          },
          {
            "Cableado": "AC 96 UHD VOD",
            "Código": 5013583,
            "Descripción": "ORGANIZAR CABLES BASTIDOR HOR P/INTERNA",
            "Cantidad": 0,
            "Pos NPA": 670
          },
          {
            "Cableado": "AC 96 UHD VOD",
            "Código": 5008287,
            "Descripción": "COLOCAR SEPARADOR HORIZONTAL P/INTERNA",
            "Cantidad": 4,
            "Pos NPA": 290
          },
          {
            "Cableado": "AC 96 UHD VOD",
            "Código": 5008288,
            "Descripción": "COLOCAR TECHNETIX - PLANTA INTERNA",
            "Cantidad": 2,
            "Pos NPA": 300
          },
          {
            "Cableado": "AC 96 UHD VOD",
            "Código": 5010547,
            "Descripción": "INSTALACIÓN MULTIPATCH MPO(24) P/INTERNA",
            "Cantidad": 1,
            "Pos NPA": 520
          },
          {
            "Cableado": "AC 96 UHD VOD",
            "Código": 5010547,
            "Descripción": "INSTALACIÓN MULTIPATCH MPO(24) P/INTERNA",
            "Cantidad": 1,
            "Pos NPA": 520
          },
          {
            "Cableado": "AC 96 UHD VOD",
            "Código": 5010549,
            "Descripción": "INSTALACIÓN MULTIPATCH MPO(48) P/INTERNA",
            "Cantidad": 3.1,
            "Pos NPA": 540
          },
          {
            "Cableado": "AC 96 UHD VOD",
            "Código": 5010530,
            "Descripción": "INSTALACIÓN E IMPACTADO DE 6 UTP",
            "Cantidad": 1.75,
            "Pos NPA": 480
          },
          {
            "Cableado": "AC 96 UHD VOD",
            "Código": 5010334,
            "Descripción": "INST. 2 CANALES ENERGÍA RACK/CABLE/PAT",
            "Cantidad": 2,
            "Pos NPA": 360
          },
          {
            "Cableado": "HW2V220",
            "Código": 5008287,
            "Descripción": "COLOCAR SEPARADOR  HORIZONTAL PLANTA INTERNA",
            "Cantidad": 5,
            "Pos NPA": 290
          },
          {
            "Cableado": "HW2V220",
            "Código": 5008287,
            "Descripción": "COLOCAR SEPARADOR  HORIZONTAL PLANTA INTERNA",
            "Cantidad": 7,
            "Pos NPA": 290
          },
          {
            "Cableado": "HW2V220",
            "Código": 5008287,
            "Descripción": "COLOCAR SEPARADOR  HORIZONTAL PLANTA INTERNA",
            "Cantidad": 4,
            "Pos NPA": 290
          },
          {
            "Cableado": "HW2V220",
            "Código": 5008283,
            "Descripción": "COLOCAR BASTIDOR HORIZONTAL  PLANTA INTERNA",
            "Cantidad": 2,
            "Pos NPA": 250
          },
          {
            "Cableado": "HW2V220",
            "Código": 5013985,
            "Descripción": "PREPARAR RACK 1000 MM O MAYOR PROFUNDIDAD PLANTA INTERNA",
            "Cantidad": 1,
            "Pos NPA": 730
          },
          {
            "Cableado": "HW2V220",
            "Código": 5010550,
            "Descripción": "INSTALACIÓN MULTIPATCH MPO 72 FIBRAS PLANTA INTERNA",
            "Cantidad": 8,
            "Pos NPA": 550
          },
          {
            "Cableado": "HW2V220",
            "Código": 5010530,
            "Descripción": "INSTALACIÓN E IMPACTADO DE 6 UTP",
            "Cantidad": 2,
            "Pos NPA": 480
          },
          {
            "Cableado": "HW2V220",
            "Código": 5008283,
            "Descripción": "COLOCAR BASTIDOR HORIZONTAL  PLANTA INTERNA",
            "Cantidad": 1,
            "Pos NPA": 250
          },
          {
            "Cableado": "HW2V220",
            "Código": 5008283,
            "Descripción": "COLOCAR BASTIDOR HORIZONTAL  PLANTA INTERNA",
            "Cantidad": 1,
            "Pos NPA": 250
          },
          {
            "Cableado": "HW2V220",
            "Código": 5008285,
            "Descripción": "COLOCAR PASIVOS BD PLANTA INTERNA",
            "Cantidad": 6,
            "Pos NPA": 270
          },
          {
            "Cableado": "HW2V220",
            "Código": 5010334,
            "Descripción": "TENDIDO DE DOS CANALES DE ENERGÍA AL RACK + CABLE + PAT",
            "Cantidad": 2,
            "Pos NPA": 360
          },
          {
            "Cableado": "HW1V220",
            "Código": 5008287,
            "Descripción": "COLOCAR SEPARADOR  HORIZONTAL PLANTA INTERNA",
            "Cantidad": 6,
            "Pos NPA": 290
          },
          {
            "Cableado": "HW1V220",
            "Código": 5008287,
            "Descripción": "COLOCAR SEPARADOR  HORIZONTAL PLANTA INTERNA",
            "Cantidad": 4,
            "Pos NPA": 290
          },
          {
            "Cableado": "HW1V220",
            "Código": 5008287,
            "Descripción": "COLOCAR SEPARADOR  HORIZONTAL PLANTA INTERNA",
            "Cantidad": 2,
            "Pos NPA": 290
          },
          {
            "Cableado": "HW1V220",
            "Código": 5008283,
            "Descripción": "COLOCAR BASTIDOR HORIZONTAL  PLANTA INTERNA",
            "Cantidad": 1,
            "Pos NPA": 250
          },
          {
            "Cableado": "HW1V220",
            "Código": 5013985,
            "Descripción": "PREPARAR RACK 1000 MM O MAYOR PROFUNDIDAD PLANTA INTERNA",
            "Cantidad": 1,
            "Pos NPA": 730
          },
          {
            "Cableado": "HW1V220",
            "Código": 5010550,
            "Descripción": "INSTALACIÓN MULTIPATCH MPO 72 FIBRAS PLANTA INTERNA",
            "Cantidad": 4,
            "Pos NPA": 550
          },
          {
            "Cableado": "HW1V220",
            "Código": 5010530,
            "Descripción": "INSTALACIÓN E IMPACTADO DE 6 UTP",
            "Cantidad": 2,
            "Pos NPA": 480
          },
          {
            "Cableado": "HW1V220",
            "Código": 5008283,
            "Descripción": "COLOCAR BASTIDOR HORIZONTAL  PLANTA INTERNA",
            "Cantidad": 1,
            "Pos NPA": 250
          },
          {
            "Cableado": "HW1V220",
            "Código": 5008283,
            "Descripción": "COLOCAR BASTIDOR HORIZONTAL  PLANTA INTERNA",
            "Cantidad": 1,
            "Pos NPA": 250
          },
          {
            "Cableado": "HW1V220",
            "Código": 5008285,
            "Descripción": "COLOCAR PASIVOS BD PLANTA INTERNA",
            "Cantidad": 6,
            "Pos NPA": 270
          },
          {
            "Cableado": "HW1V220",
            "Código": 5010334,
            "Descripción": "TENDIDO DE DOS CANALES DE ENERGÍA AL RACK + CABLE + PAT",
            "Cantidad": 2,
            "Pos NPA": 360
          },
          {
            "Cableado": "NK2V220",
            "Código": 5008287,
            "Descripción": "COLOCAR SEPARADOR  HORIZONTAL PLANTA INTERNA",
            "Cantidad": 3,
            "Pos NPA": 290
          },
          {
            "Cableado": "NK2V220",
            "Código": 5008287,
            "Descripción": "COLOCAR SEPARADOR  HORIZONTAL PLANTA INTERNA",
            "Cantidad": 7,
            "Pos NPA": 290
          },
          {
            "Cableado": "NK2V220",
            "Código": 5008287,
            "Descripción": "COLOCAR SEPARADOR  HORIZONTAL PLANTA INTERNA",
            "Cantidad": 2,
            "Pos NPA": 290
          },
          {
            "Cableado": "NK2V220",
            "Código": 5008283,
            "Descripción": "COLOCAR BASTIDOR HORIZONTAL  PLANTA INTERNA",
            "Cantidad": 2,
            "Pos NPA": 250
          },
          {
            "Cableado": "NK2V220",
            "Código": 5013985,
            "Descripción": "PREPARAR RACK 1000 MM O MAYOR PROFUNDIDAD PLANTA INTERNA",
            "Cantidad": 1,
            "Pos NPA": 730
          },
          {
            "Cableado": "NK2V220",
            "Código": 5010550,
            "Descripción": "INSTALACIÓN MULTIPATCH MPO 72 FIBRAS PLANTA INTERNA",
            "Cantidad": 8,
            "Pos NPA": 550
          },
          {
            "Cableado": "NK2V220",
            "Código": 5010530,
            "Descripción": "INSTALACIÓN E IMPACTADO DE 6 UTP",
            "Cantidad": 2,
            "Pos NPA": 480
          },
          {
            "Cableado": "NK2V220",
            "Código": 5008283,
            "Descripción": "COLOCAR BASTIDOR HORIZONTAL  PLANTA INTERNA",
            "Cantidad": 1,
            "Pos NPA": 250
          },
          {
            "Cableado": "NK2V220",
            "Código": 5008283,
            "Descripción": "COLOCAR BASTIDOR HORIZONTAL  PLANTA INTERNA",
            "Cantidad": 1,
            "Pos NPA": 250
          },
          {
            "Cableado": "NK2V220",
            "Código": 5008285,
            "Descripción": "COLOCAR PASIVOS BD PLANTA INTERNA",
            "Cantidad": 6,
            "Pos NPA": 270
          },
          {
            "Cableado": "NK2V220",
            "Código": 5010334,
            "Descripción": "TENDIDO DE DOS CANALES DE ENERGÍA AL RACK + CABLE + PAT",
            "Cantidad": 2,
            "Pos NPA": 360
          },
          {
            "Cableado": "NK1V220",
            "Código": 5008287,
            "Descripción": "COLOCAR SEPARADOR  HORIZONTAL PLANTA INTERNA",
            "Cantidad": 7,
            "Pos NPA": 290
          },
          {
            "Cableado": "NK1V220",
            "Código": 5008287,
            "Descripción": "COLOCAR SEPARADOR  HORIZONTAL PLANTA INTERNA",
            "Cantidad": 4,
            "Pos NPA": 290
          },
          {
            "Cableado": "NK1V220",
            "Código": 5008287,
            "Descripción": "COLOCAR SEPARADOR  HORIZONTAL PLANTA INTERNA",
            "Cantidad": 1,
            "Pos NPA": 290
          },
          {
            "Cableado": "NK1V220",
            "Código": 5008283,
            "Descripción": "COLOCAR BASTIDOR HORIZONTAL  PLANTA INTERNA",
            "Cantidad": 1,
            "Pos NPA": 250
          },
          {
            "Cableado": "NK1V220",
            "Código": 5013985,
            "Descripción": "PREPARAR RACK 1000 MM O MAYOR PROFUNDIDAD PLANTA INTERNA",
            "Cantidad": 1,
            "Pos NPA": 730
          },
          {
            "Cableado": "NK1V220",
            "Código": 5010550,
            "Descripción": "INSTALACIÓN MULTIPATCH MPO 72 FIBRAS PLANTA INTERNA",
            "Cantidad": 4,
            "Pos NPA": 550
          },
          {
            "Cableado": "NK1V220",
            "Código": 5010530,
            "Descripción": "INSTALACIÓN E IMPACTADO DE 6 UTP",
            "Cantidad": 2,
            "Pos NPA": 480
          },
          {
            "Cableado": "NK1V220",
            "Código": 5008283,
            "Descripción": "COLOCAR BASTIDOR HORIZONTAL  PLANTA INTERNA",
            "Cantidad": 1,
            "Pos NPA": 250
          },
          {
            "Cableado": "NK1V220",
            "Código": 5008283,
            "Descripción": "COLOCAR BASTIDOR HORIZONTAL  PLANTA INTERNA",
            "Cantidad": 1,
            "Pos NPA": 250
          },
          {
            "Cableado": "NK1V220",
            "Código": 5008285,
            "Descripción": "COLOCAR PASIVOS BD PLANTA INTERNA",
            "Cantidad": 6,
            "Pos NPA": 270
          },
          {
            "Cableado": "NK1V220",
            "Código": 5010334,
            "Descripción": "TENDIDO DE DOS CANALES DE ENERGÍA AL RACK + CABLE + PAT",
            "Cantidad": 2,
            "Pos NPA": 360
          },
          {
            "Cableado": "HW2V48",
            "Código": 5008287,
            "Descripción": "COLOCAR SEPARADOR  HORIZONTAL PLANTA INTERNA",
            "Cantidad": 5,
            "Pos NPA": 290
          },
          {
            "Cableado": "HW2V48",
            "Código": 5008287,
            "Descripción": "COLOCAR SEPARADOR  HORIZONTAL PLANTA INTERNA",
            "Cantidad": 7,
            "Pos NPA": 290
          },
          {
            "Cableado": "HW2V48",
            "Código": 5008287,
            "Descripción": "COLOCAR SEPARADOR  HORIZONTAL PLANTA INTERNA",
            "Cantidad": 4,
            "Pos NPA": 290
          },
          {
            "Cableado": "HW2V48",
            "Código": 5008283,
            "Descripción": "COLOCAR BASTIDOR HORIZONTAL  PLANTA INTERNA",
            "Cantidad": 2,
            "Pos NPA": 250
          },
          {
            "Cableado": "HW2V48",
            "Código": 5013985,
            "Descripción": "PREPARAR RACK 1000 MM O MAYOR PROFUNDIDAD PLANTA INTERNA",
            "Cantidad": 1,
            "Pos NPA": 730
          },
          {
            "Cableado": "HW2V48",
            "Código": 5010550,
            "Descripción": "INSTALACIÓN MULTIPATCH MPO 72 FIBRAS PLANTA INTERNA",
            "Cantidad": 8,
            "Pos NPA": 550
          },
          {
            "Cableado": "HW2V48",
            "Código": 5010530,
            "Descripción": "INSTALACIÓN E IMPACTADO DE 6 UTP",
            "Cantidad": 2,
            "Pos NPA": 480
          },
          {
            "Cableado": "HW2V48",
            "Código": 5008283,
            "Descripción": "COLOCAR BASTIDOR HORIZONTAL  PLANTA INTERNA",
            "Cantidad": 1,
            "Pos NPA": 250
          },
          {
            "Cableado": "HW2V48",
            "Código": 5007936,
            "Descripción": "CABLEADO  ( MAYOR A 10 MM)  POR UNIDAD Y POR METRO",
            "Cantidad": 50,
            "Pos NPA": 150
          },
          {
            "Cableado": "HW1V48",
            "Código": 5008287,
            "Descripción": "COLOCAR SEPARADOR  HORIZONTAL PLANTA INTERNA",
            "Cantidad": 6,
            "Pos NPA": 290
          },
          {
            "Cableado": "HW1V48",
            "Código": 5008287,
            "Descripción": "COLOCAR SEPARADOR  HORIZONTAL PLANTA INTERNA",
            "Cantidad": 4,
            "Pos NPA": 290
          },
          {
            "Cableado": "HW1V48",
            "Código": 5008287,
            "Descripción": "COLOCAR SEPARADOR  HORIZONTAL PLANTA INTERNA",
            "Cantidad": 2,
            "Pos NPA": 290
          },
          {
            "Cableado": "HW1V48",
            "Código": 5008283,
            "Descripción": "COLOCAR BASTIDOR HORIZONTAL  PLANTA INTERNA",
            "Cantidad": 1,
            "Pos NPA": 250
          },
          {
            "Cableado": "HW1V48",
            "Código": 5013985,
            "Descripción": "PREPARAR RACK 1000 MM O MAYOR PROFUNDIDAD PLANTA INTERNA",
            "Cantidad": 1,
            "Pos NPA": 730
          },
          {
            "Cableado": "HW1V48",
            "Código": 5010550,
            "Descripción": "INSTALACIÓN MULTIPATCH MPO 72 FIBRAS PLANTA INTERNA",
            "Cantidad": 4,
            "Pos NPA": 550
          },
          {
            "Cableado": "HW1V48",
            "Código": 5010530,
            "Descripción": "INSTALACIÓN E IMPACTADO DE 6 UTP",
            "Cantidad": 2,
            "Pos NPA": 480
          },
          {
            "Cableado": "HW1V48",
            "Código": 5008283,
            "Descripción": "COLOCAR BASTIDOR HORIZONTAL  PLANTA INTERNA",
            "Cantidad": 1,
            "Pos NPA": 250
          },
          {
            "Cableado": "HW1V48",
            "Código": 5007936,
            "Descripción": "CABLEADO  ( MAYOR A 10 MM)  POR UNIDAD Y POR METRO",
            "Cantidad": 50,
            "Pos NPA": 150
          },
          {
            "Cableado": "NK2V48",
            "Código": 5008287,
            "Descripción": "COLOCAR SEPARADOR  HORIZONTAL PLANTA INTERNA",
            "Cantidad": 3,
            "Pos NPA": 290
          },
          {
            "Cableado": "NK2V48",
            "Código": 5008287,
            "Descripción": "COLOCAR SEPARADOR  HORIZONTAL PLANTA INTERNA",
            "Cantidad": 7,
            "Pos NPA": 290
          },
          {
            "Cableado": "NK2V48",
            "Código": 5008287,
            "Descripción": "COLOCAR SEPARADOR  HORIZONTAL PLANTA INTERNA",
            "Cantidad": 2,
            "Pos NPA": 290
          },
          {
            "Cableado": "NK2V48",
            "Código": 5008283,
            "Descripción": "COLOCAR BASTIDOR HORIZONTAL  PLANTA INTERNA",
            "Cantidad": 2,
            "Pos NPA": 250
          },
          {
            "Cableado": "NK2V48",
            "Código": 5013985,
            "Descripción": "PREPARAR RACK 1000 MM O MAYOR PROFUNDIDAD PLANTA INTERNA",
            "Cantidad": 1,
            "Pos NPA": 730
          },
          {
            "Cableado": "NK2V48",
            "Código": 5010550,
            "Descripción": "INSTALACIÓN MULTIPATCH MPO 72 FIBRAS PLANTA INTERNA",
            "Cantidad": 8,
            "Pos NPA": 550
          },
          {
            "Cableado": "NK2V48",
            "Código": 5010530,
            "Descripción": "INSTALACIÓN E IMPACTADO DE 6 UTP",
            "Cantidad": 2,
            "Pos NPA": 480
          },
          {
            "Cableado": "NK2V48",
            "Código": 5008283,
            "Descripción": "COLOCAR BASTIDOR HORIZONTAL  PLANTA INTERNA",
            "Cantidad": 1,
            "Pos NPA": 250
          },
          {
            "Cableado": "NK2V48",
            "Código": 5007936,
            "Descripción": "CABLEADO  ( MAYOR A 10 MM)  POR UNIDAD Y POR METRO",
            "Cantidad": 50,
            "Pos NPA": 150
          },
          {
            "Cableado": "NK1V48",
            "Código": 5008287,
            "Descripción": "COLOCAR SEPARADOR  HORIZONTAL PLANTA INTERNA",
            "Cantidad": 7,
            "Pos NPA": 290
          },
          {
            "Cableado": "NK1V48",
            "Código": 5008287,
            "Descripción": "COLOCAR SEPARADOR  HORIZONTAL PLANTA INTERNA",
            "Cantidad": 4,
            "Pos NPA": 290
          },
          {
            "Cableado": "NK1V48",
            "Código": 5008287,
            "Descripción": "COLOCAR SEPARADOR  HORIZONTAL PLANTA INTERNA",
            "Cantidad": 1,
            "Pos NPA": 290
          },
          {
            "Cableado": "NK1V48",
            "Código": 5008283,
            "Descripción": "COLOCAR BASTIDOR HORIZONTAL  PLANTA INTERNA",
            "Cantidad": 1,
            "Pos NPA": 250
          },
          {
            "Cableado": "NK1V48",
            "Código": 5013985,
            "Descripción": "PREPARAR RACK 1000 MM O MAYOR PROFUNDIDAD PLANTA INTERNA",
            "Cantidad": 1,
            "Pos NPA": 730
          },
          {
            "Cableado": "NK1V48",
            "Código": 5010550,
            "Descripción": "INSTALACIÓN MULTIPATCH MPO 72 FIBRAS PLANTA INTERNA",
            "Cantidad": 4,
            "Pos NPA": 550
          },
          {
            "Cableado": "NK1V48",
            "Código": 5010530,
            "Descripción": "INSTALACIÓN E IMPACTADO DE 6 UTP",
            "Cantidad": 2,
            "Pos NPA": 480
          },
          {
            "Cableado": "NK1V48",
            "Código": 5008283,
            "Descripción": "COLOCAR BASTIDOR HORIZONTAL  PLANTA INTERNA",
            "Cantidad": 1,
            "Pos NPA": 250
          },
          {
            "Cableado": "NK1V48",
            "Código": 5007936,
            "Descripción": "CABLEADO  ( MAYOR A 10 MM)  POR UNIDAD Y POR METRO",
            "Cantidad": 50,
            "Pos NPA": 150
          }
        ]
          }))
