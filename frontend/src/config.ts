export const config = {
    pageTitle: "Federico Tropiane",
    pagePresentation: "Tu web, fácil y accesible",
    contact: {
        email: "fedetrop23@gmail.com",
        phone: "095964325",
        city: "Montevideo",
        country: "Uruguay"
    },
    socialMedia: [
        {
            key: "instagram",
            url: "https://www.instagram.com/tropianee/"
        }
    ],
    presentationData: {
        title: "Nuestro objetivo",
        description: "Entendemos que para muchos es difícil costear una web y saber qué se necesita. Nuestro objetivo principal es que cualquier persona pueda acceder a una web clara, profesional, que genere una experiencia positiva para crecer y mostrar lo que más le importa.",
        image: "https://images.unsplash.com/photo-1549692520-acc6669e2f0c?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        imageAlt: "Presentación del proyecto personal",
        link: "/quien-soy",
        linkText: "Conocé nuestros servicios"
    },
    aboutMeData: {
        title: "Quiero que mi web sea:",
        description: "Sencilla, clara y accesible. Ideal para personas que quieren mostrar lo que hacen y que quieran llegar a un mayor publico, sin complicaciones. ",
        description2: "Mi nombre es Fede, tengo como objetivo que cualquier persona pueda acceder a una web sencilla, clara y accesible para crecer y mostrar lo que más le importa. Sea cual sea tu presupuesto, vamos a adaptarlo juntos. Estoy para acompañarte en tu camino hacia tu web ideal.",
    },
    planData: [
        {
            title: "Plan Inicial",
            description: "Tu primer paso en internet, fácil y accesible. Ideal para quienes quieren mostrar su negocio o proyecto de manera simple y clara, sin complicaciones.",
            features: [
                "Landing page básica (Inicio + Contacto).",
                "Diseño adaptable a celulares y tablets.",
                "Integración con tus redes sociales."
            ],
            price: '70-100',
            link: "/plan-inicial",
            id: 1,
            position: "left",
            image: "/src/assets/images/planImage.png",
            cta: "Hablemos hoy y demos juntos el primer paso."
        },
        {
            title: "Plan Emprendedor",
            description: "Dale a tu negocio la presencia digital que merece. Pensado para pequeños negocios o emprendedores que necesitan más secciones para mostrar lo que hacen.",
            features: [
                "Hasta 3 secciones (Inicio, Servicios, Contacto).",
                "Galería o catálogo básico.",
                "Optimización básica para Google.",
                "Botón de WhatsApp directo para consultas rápidas."
            ],
            price: '120-150',
            link: "/plan-emprendedor",
            id: 2,
            position: "upper",
            image: "/src/assets/images/planImage.png",
            cta: "Reservá tu plan y empecemos a construir tu web."
        },
        {
            title: "Plan Crecimiento",
            description: "Tu negocio digital, listo para dar el siguiente paso. Diseñado para quienes ya tienen clientes y quieren consolidar su marca online con más herramientas.",
            features: [
                "Hasta 5 secciones (Inicio, Nosotros, Servicios, Preguntas Frecuentes, Contacto).",
                "Posibilidad de blog o catálogo simple.",
                "Hosting y dominio inicial (opcional).",
                "Una actualización menor incluida."
            ],
            price: '200 - 300',
            link: "/plan-crecimiento",
            id: 3,
            position: "right",
            image: "/src/assets/images/planImage.png",
            cta: "Demos el siguiente paso juntos. Contactame y empezamos."
        }
    ],
    links: [
        {
            text: "Contacto",
            url: "/contacto",
            className: "green"
        }
    ],
    navBarLinksLogin: [
        {
            id:1,
            text: "Inicio",
            link: "/",
            className: "green"
        },
        {
            id: 3,
            text: "Tickets Manager",
            link: "/tickets-manager",
            className: "green"
        },
    ],
    navBarLinks: [
        {
            id:1,
            text: "Inicio",
            link: "/",
            className: "green"
        },
        {
            id: 2,
            text: "Ingreso",
            link: '/login'
        }
    ],
    globalCTA: {
        title: "¿Listo para tener tu web?",
        description: "Mi objetivo es que cualquier persona pueda tener una web simple, clara y accesible. Elegí tu plan y comencemos juntos.",
        buttonText: "Contactame ahora",
        buttonLink: "/contacto"
    }
};
