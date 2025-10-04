function generarConfigAleatoria() {
    const negocios = ["Studio Nova", "Pixel & Co", "Vida Sana", "Equilibrio Estético"];
    const slogans = ["Transformamos tu idea en realidad", "Bienestar a un clic", "Estilo, salud y diseño", "Tu crecimiento, nuestra misión"];
    const ciudades = ["Montevideo", "Punta del Este", "Colonia", "Salto"];
    const paises = ["Uruguay", "Argentina", "Chile"];

    const redes = ["instagram", "facebook", "tiktok"];
    const planes = ["Básico", "Pro", "Premium"];
    
    const negocio = negocios[Math.floor(Math.random() * negocios.length)];
    const slogan = slogans[Math.floor(Math.random() * slogans.length)];
    const ciudad = ciudades[Math.floor(Math.random() * ciudades.length)];
    const pais = paises[Math.floor(Math.random() * paises.length)];

    return {
        pageTitle: negocio,
        pagePresentation: slogan,
        contact: {
            email: `info@${negocio.toLowerCase().replace(/ /g, '')}.com`,
            phone: "+598 99 123 456",
            city: ciudad,
            country: pais
        },
        socialMedia: redes.map((r) => ({
            key: r,
            url: `https://www.${r}.com/${negocio.toLowerCase().replace(/ /g, '')}`
        })),
        presentationData: {
            title: "Sobre Nosotros",
            description: "Somos un equipo dedicado a brindar soluciones creativas y personalizadas.",
            image: "/src/assets/images/default_presentation.webp",
            imageAlt: "Imagen de presentación genérica",
            link: "/sobre-nosotros",
            linkText: "Conocé más"
        },
        planData: planes.map((p, index) => ({
            title: `Plan ${p}`,
            description: `Este es el plan ${p.toLowerCase()} pensado para vos.`,
            link: `/plan-${p.toLowerCase()}`,
            id: index + 1,
            position: ["left", "upper", "right"][index],
            image: `/src/assets/images/plan_${p.toLowerCase()}.png`
        })),
        links: [
            {
                text: "Servicios",
                url: "/servicios",
                className: "green"
            },
            {
                text: "Contacto",
                url: "/contacto",
                className: "yellow"
            }
        ]
    };
}

export const config = generarConfigAleatoria();