// Definición de canales con sus categorías y URLs de streaming
const channels = [
    {
        id: 1,
        name: "Canal 24 Horas",
        category: "Noticias",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Logo_TVE-24h.svg/512px-Logo_TVE-24h.svg.png",
        streamUrl: "https://rtvelivestream.akamaized.net/rtvesec/24h/24h_main_dvr.m3u8",
        isLive: true
    },
    {
        id: 2,
        name: "La 1",
        category: "General",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Logo_TVE-1.svg/281px-Logo_TVE-1.svg.png",
        streamUrl: "https://rtvelivestream.akamaized.net/rtvesec/la1/la1_main_dvr.m3u8",
        isLive: true
    },
    {
        id: 3,
        name: "La 2",
        category: "Cultural",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Logo_TVE-2.svg/281px-Logo_TVE-2.svg.png",
        streamUrl: "https://rtvelivestream.akamaized.net/rtvesec/la2/la2_main_dvr.m3u8",
        isLive: true
    },
    {
        id: 4,
        name: "Antena 3",
        category: "General",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Antena_3_%282017%29.svg/512px-Antena_3_%282017%29.svg.png",
        streamUrl: "https://example.com/antena3.m3u8", // URL de ejemplo
        isLive: true
    },
    {
        id: 5,
        name: "Telecinco",
        category: "General",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Telecinco.svg/512px-Telecinco.svg.png",
        streamUrl: "https://example.com/telecinco.m3u8", // URL de ejemplo
        isLive: true
    },
    {
        id: 6,
        name: "La Sexta",
        category: "General",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/La_Sexta_%28A3M%29.svg/512px-La_Sexta_%28A3M%29.svg.png",
        streamUrl: "https://example.com/lasexta.m3u8", // URL de ejemplo
        isLive: false
    },
    {
        id: 7,
        name: "Cuatro",
        category: "General",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Logotipo_de_Cuatro.svg/512px-Logotipo_de_Cuatro.svg.png",
        streamUrl: "https://example.com/cuatro.m3u8", // URL de ejemplo
        isLive: true
    },
    {
        id: 8,
        name: "Teledeporte",
        category: "Deportes",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Teledeporte.svg/512px-Teledeporte.svg.png",
        streamUrl: "https://rtvelivestream.akamaized.net/rtvesec/tdp/tdp_main_dvr.m3u8",
        isLive: true
    },
    {
        id: 9,
        name: "Clan",
        category: "Infantil",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Clan_TVE.svg/512px-Clan_TVE.svg.png",
        streamUrl: "https://rtvelivestream.akamaized.net/rtvesec/clan/clan_main_dvr.m3u8",
        isLive: false
    },
    {
        id: 10,
        name: "Canal Sur",
        category: "Regional",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Canal_Sur_Television.svg/512px-Canal_Sur_Television.svg.png",
        streamUrl: "https://example.com/canalsur.m3u8", // URL de ejemplo
        isLive: true
    },
    {
        id: 11,
        name: "TV3",
        category: "Regional",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/TV3.svg/512px-TV3.svg.png",
        streamUrl: "https://example.com/tv3.m3u8", // URL de ejemplo
        isLive: true
    },