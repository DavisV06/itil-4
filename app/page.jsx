'use client'

import React, { useState } from 'react';
import { ChevronRight, RotateCcw, CheckCircle, XCircle } from 'lucide-react';

export default function ITIL4QuizApp() {
  const [currentModule, setCurrentModule] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState(false);
  const [moduleStats, setModuleStats] = useState({});

  const modules = [
    {
      id: 1,
      name: '📋 Conceptos Fundamentales de ITIL',
      questions: [
        {
          question: '¿Cuál es el objetivo principal de ITIL 4?',
          options: [
            'Reemplazar todos los procesos de TI existentes',
            'Proporcionar guías prácticas para la gestión de servicios de TI',
            'Eliminar la necesidad de personal de TI',
            'Aumentar los costos de TI'
          ],
          correct: 1,
          explanation: 'ITIL 4 proporciona guías prácticas y orientación sobre cómo gestionar los servicios de TI de manera efectiva. No busca reemplazar procesos ni aumentar costos, sino optimizar la entrega de valor.'
        },
        {
          question: '¿Qué es un "servicio" en el contexto de ITIL?',
          options: [
            'Un software que se ejecuta en el servidor',
            'Un medio de habilitar la creación de valor mediante la facilitación de resultados que los clientes desean',
            'Un contrato entre la organización de TI y el cliente',
            'Una herramienta de monitoreo de sistemas'
          ],
          correct: 1,
          explanation: 'En ITIL, un servicio es un medio para habilitar la creación de valor. Facilita los resultados que los clientes desean lograr sin que tengan que asumir costos específicos y riesgos.'
        },
        {
          question: '¿Cuál de las siguientes es una característica clave de ITIL 4?',
          options: [
            'Enfoque prescriptivo único',
            'Enfoque flexible y adaptable basado en prácticas',
            'Eliminación de todos los procesos',
            'Aplicación solo a empresas grandes'
          ],
          correct: 1,
          explanation: 'ITIL 4 es flexible y adaptable. Proporciona un conjunto de prácticas que pueden personalizarse según el contexto y necesidades específicas de cada organización.'
        },
        {
          question: '¿Qué significa "ITIL"?',
          options: [
            'Information Technology Information Library',
            'Information Technology Infrastructure Library',
            'Internal Technology Information Library',
            'Integrated Technology Infrastructure List'
          ],
          correct: 1,
          explanation: 'ITIL es la abreviatura de "Information Technology Infrastructure Library" - una biblioteca de infraestructura de tecnología de la información que proporciona mejores prácticas.'
        },
        {
          question: '¿En qué año se lanzó ITIL 4?',
          options: [
            '2015',
            '2018',
            '2019',
            '2020'
          ],
          correct: 2,
          explanation: 'ITIL 4 fue lanzado en febrero de 2019 como la evolución de ITIL v3 (2011), incorporando métodos ágiles y modernos de gestión.'
        },
        {
          question: '¿Cuál era la versión anterior a ITIL 4?',
          options: [
            'ITIL v2',
            'ITIL v3',
            'ITIL 3.0',
            'ITIL 2011'
          ],
          correct: 1,
          explanation: 'ITIL v3 fue la versión anterior, lanzada en 2007. ITIL 4 modernizó el marco para adaptarse a enfoques ágiles y DevOps.'
        },
        {
          question: '¿Qué es un "resultado de negocio" en ITIL?',
          options: [
            'Solo dinero que gana la empresa',
            'El resultado que el cliente obtiene del uso del servicio',
            'El presupuesto anual de TI',
            'El número de tickets resueltos'
          ],
          correct: 1,
          explanation: 'Un resultado de negocio es lo que el cliente quiere lograr al usar el servicio. ITIL se enfoca en entregar estos resultados, no solo en ejecutar procesos.'
        },
        {
          question: '¿Cuál es la diferencia entre ITIL y ISO/IEC 20000?',
          options: [
            'ITIL es una norma, ISO/IEC 20000 es orientación',
            'ITIL es orientación, ISO/IEC 20000 es una norma certificable',
            'No hay diferencia real',
            'ITIL solo aplica a servicios, ISO a infraestructura'
          ],
          correct: 1,
          explanation: 'ITIL es un marco de buenas prácticas. ISO/IEC 20000 es una norma internacional que certifica que una organización cumple con requisitos de gestión de servicios.'
        },
        {
          question: '¿A quién se aplica principalmente ITIL?',
          options: [
            'Solo a proveedores de servicios internos',
            'Solo a proveedores externos de servicios',
            'A cualquier organización que entregue servicios de TI',
            'Solo a empresas de software'
          ],
          correct: 2,
          explanation: 'ITIL puede aplicarse a cualquier organización que entregue servicios de TI, ya sean internas o externas, grandes o pequeñas.'
        },
        {
          question: '¿Cuál es el propósito de las prácticas en ITIL 4?',
          options: [
            'Reemplazar todos los procesos existentes',
            'Proporcionar orientación prescriptiva que no puede cambiar',
            'Facilitar la creación de valor mediante un conjunto de recursos',
            'Eliminar la necesidad de gestión'
          ],
          correct: 2,
          explanation: 'Las prácticas de ITIL 4 son conjuntos de recursos organizados diseñados para facilitar la creación de valor. Se pueden adaptar al contexto específico.'
        },
        {
          question: '¿Qué significa "valor" en el contexto de ITIL 4?',
          options: [
            'Solo el precio del servicio',
            'La combinación de utilidad y garantía del servicio',
            'El costo de la infraestructura',
            'La cantidad de clientes'
          ],
          correct: 1,
          explanation: 'Valor = Utilidad + Garantía. La utilidad es lo que hace el servicio (resultados). La garantía es que se entrega de forma confiable y segura.'
        },
        {
          question: '¿Cuál es la diferencia entre utilidad y garantía?',
          options: [
            'No hay diferencia',
            'Utilidad es lo que el cliente quiere, garantía es que se lo daremos cuando lo necesite',
            'Utilidad es el precio, garantía es el soporte',
            'Utilidad es el software, garantía es el hardware'
          ],
          correct: 1,
          explanation: 'Utilidad (fitness for use): ¿Funciona para lo que el cliente necesita? Garantía (fitness for purpose): ¿Es disponible, confiable y seguro?'
        },
        {
          question: '¿En qué se diferencia ITIL 4 de versiones anteriores?',
          options: [
            'Más énfasis en procesos rigurosos',
            'Menos importancia en el cliente',
            'Mayor flexibilidad y adaptabilidad, integración con Agile y DevOps',
            'Enfoque único y prescriptivo'
          ],
          correct: 2,
          explanation: 'ITIL 4 es más flexible, orientado a prácticas adaptables y se integra mejor con metodologías modernas como Agile y DevOps.'
        },
        {
          question: '¿Qué es la "gestión de servicios" según ITIL?',
          options: [
            'Solo reparar computadoras',
            'Un conjunto de capacidades organizacionales para entregar valor mediante servicios',
            'Contratar proveedores externos',
            'Comprar software nuevo'
          ],
          correct: 1,
          explanation: 'La gestión de servicios es un conjunto de capacidades organizacionales que permiten a una organización crear y entregar valor mediante servicios.'
        },
        {
          question: '¿Cuál es la base del ciclo de vida de los servicios en ITIL 4?',
          options: [
            'El modelo PDCA (Plan-Do-Check-Act)',
            'Un enfoque de 5 fases secuenciales',
            'Una cadena de valor flexible e integrada',
            'Un sistema de procesos aislados'
          ],
          correct: 2,
          explanation: 'ITIL 4 introduce la Cadena de Valor del Servicio (SVA), que es flexible e integrada, no secuencial como las versiones anteriores.'
        },
        {
          question: '¿Qué es un "cliente" en ITIL?',
          options: [
            'Solo personas externas a la organización',
            'Cualquier persona que experimenta un resultado',
            'Solo el que paga por el servicio',
            'El departamento de compras'
          ],
          correct: 1,
          explanation: 'Un cliente es cualquier persona que experimenta un resultado derivado de un servicio, puede ser interno o externo.'
        },
        {
          question: '¿Cuál es el foco principal de ITIL 4 versus ITIL v3?',
          options: [
            'ITIL 4 solo se enfoca en procesos',
            'ITIL 4 se enfoca en la creación de valor y flexibilidad',
            'ITIL 4 requiere más documentación',
            'ITIL 4 elimina la necesidad de estructura'
          ],
          correct: 1,
          explanation: 'ITIL 4 cambia el foco de "ejecutar procesos" a "crear valor de forma flexible y adaptable".'
        },
        {
          question: '¿Quién puede obtener la certificación ITIL 4 Foundations?',
          options: [
            'Solo personas con experiencia en TI',
            'Solo directores ejecutivos',
            'Cualquier persona, sin requisitos previos',
            'Solo ingenieros de software'
          ],
          correct: 2,
          explanation: 'La certificación ITIL 4 Foundations no tiene requisitos previos. Cualquier persona puede presentarse al examen.'
        },
        {
          question: '¿Cuántas preguntas tiene el examen ITIL 4 Foundations?',
          options: [
            '40 preguntas',
            '50 preguntas',
            '60 preguntas',
            '80 preguntas'
          ],
          correct: 0,
          explanation: 'El examen ITIL 4 Foundations consta de 40 preguntas de opción múltiple. Necesitas responder correctamente al menos 26 (65%) para aprobar.'
        },
        {
          question: '¿Cuál es el tiempo límite del examen ITIL 4 Foundations?',
          options: [
            '60 minutos',
            '75 minutos',
            '90 minutos',
            '120 minutos'
          ],
          correct: 1,
          explanation: 'El examen tiene 75 minutos de duración. Es importante gestionar bien el tiempo durante el examen.'
        },
        {
          question: '¿Cuál es el porcentaje de aprobación requerido en ITIL 4 Foundations?',
          options: [
            '50%',
            '60%',
            '65%',
            '75%'
          ],
          correct: 2,
          explanation: 'Se requiere un 65% de calificación para aprobar. Esto significa responder correctamente 26 de 40 preguntas.'
        }
      ]
    },
    {
      id: 2,
      name: '🔄 Los 7 Principios Guía de ITIL 4',
      questions: [
        {
          question: '¿Cuál es el primer principio guía de ITIL 4?',
          options: [
            'Automatizar todo',
            'Enfocarse en el valor',
            'Reducir costos a toda costa',
            'Implementar procesos complejos'
          ],
          correct: 1,
          explanation: 'El primer principio es "Enfocarse en el valor". Toda la gestión de servicios debe orientarse hacia la creación de valor tanto para el cliente como para la organización.'
        },
        {
          question: '¿Cuál principio aborda el manejo de complejidad mediante iteraciones?',
          options: [
            'Optimizar el flujo de valor',
            'Pensar y trabajar de forma holística',
            'Comenzar donde estás',
            'Progresa iterativamente con retroalimentación'
          ],
          correct: 3,
          explanation: '"Progresa iterativamente con retroalimentación" enfatiza que los cambios deben hacerse en pasos pequeños, recopilando retroalimentación en cada iteración para mejorar continuamente.'
        },
        {
          question: '¿Qué significan las siglas PDCA?',
          options: [
            'Planificar, Diseñar, Crear, Administrar',
            'Planificar, Hacer, Comprobar, Actuar',
            'Procesar, Desarrollar, Controlar, Analizar',
            'Propuestas, Decisiones, Cambios, Ajustes'
          ],
          correct: 1,
          explanation: 'PDCA significa Plan-Do-Check-Act (Planificar-Hacer-Comprobar-Actuar). Es el ciclo de mejora continua que forma la base del mejoramiento iterativo en ITIL 4.'
        },
        {
          question: '¿Cuál de estos NO es uno de los 7 principios guía?',
          options: [
            'Mantén las cosas simples y prácticas',
            'Colabora y promueve la visibilidad',
            'Automatiza todos los procesos',
            'Piensa y trabaja de forma holística'
          ],
          correct: 2,
          explanation: '"Automatiza todos los procesos" no es un principio. Los 7 principios son: Enfoque en valor, Comenzar donde estás, Progresar iterativamente, Colaborar, Holístico, Simple y práctico, y Optimizar el flujo de valor.'
        },
        {
          question: '¿Qué principio enfatiza la integración de todas las partes de la organización?',
          options: [
            'Comenzar donde estás',
            'Piensa y trabaja de forma holística',
            'Optimiza el flujo de valor',
            'Colabora y promueve la visibilidad'
          ],
          correct: 1,
          explanation: '"Piensa y trabaja de forma holística" subraya que la gestión de servicios no es responsabilidad solo de TI, sino que requiere la integración de todas las funciones de la organización.'
        },
        {
          question: '¿Qué significa "Comenzar donde estás"?',
          options: [
            'No hacer cambios en la organización',
            'Evaluar el estado actual y construir mejoras desde esa base',
            'Empezar a reemplazar todo inmediatamente',
            'Ignorar los procesos existentes'
          ],
          correct: 1,
          explanation: '"Comenzar donde estás" significa evaluar y entender el estado actual de la organización antes de implementar cambios, construyendo sobre lo que ya existe.'
        },
        {
          question: '¿Cuál es el objetivo del principio "Enfocarse en el valor"?',
          options: [
            'Maximizar los costos de TI',
            'Eliminar todos los gastos',
            'Asegurar que cada acción contribuya a crear valor',
            'Reducir la cantidad de clientes'
          ],
          correct: 2,
          explanation: 'El principio enfatiza que todas las actividades deben evaluarse por su contribución a la creación de valor para los clientes y la organización.'
        },
        {
          question: '¿Qué se entiende por "Colabora y promueve la visibilidad"?',
          options: [
            'Solo el equipo de TI necesita colaborar',
            'Involucrar a todas las partes interesadas y compartir información de forma transparente',
            'Mantener los procesos ocultos',
            'Trabajar de forma aislada'
          ],
          correct: 1,
          explanation: 'Este principio enfatiza la importancia de la colaboración entre equipos y la transparencia en la comunicación para lograr mejores resultados.'
        },
        {
          question: '¿Cuál principio se enfoca en reducir complejidad innecesaria?',
          options: [
            'Piensa y trabaja de forma holística',
            'Mantén las cosas simples y prácticas',
            'Optimiza el flujo de valor',
            'Colabora y promueve la visibilidad'
          ],
          correct: 1,
          explanation: '"Mantén las cosas simples y prácticas" promueve soluciones simples y directas, evitando complejidad innecesaria en procesos y sistemas.'
        },
        {
          question: '¿Qué implica "Optimizar el flujo de valor"?',
          options: [
            'Aumentar la cantidad de procesos',
            'Eliminar redundancias y asegurar que el trabajo fluye eficientemente',
            'Ralentizar los procesos',
            'Crear más departamentos'
          ],
          correct: 1,
          explanation: 'Este principio busca identificar y eliminar obstáculos, permitiendo que el trabajo fluya eficientemente hacia la entrega de valor.'
        },
        {
          question: '¿Cuál es la diferencia entre una mejora iterativa y un cambio radical?',
          options: [
            'No hay diferencia',
            'Las iterativas son pequeños pasos con retroalimentación; radicales son cambios grandes de una sola vez',
            'Radicales son mejores que iterativas',
            'Iterativas no funcionan en TI'
          ],
          correct: 1,
          explanation: 'ITIL 4 promueve mejoras iterativas (pequeños pasos) para reducir riesgos y permitir ajustes continuos basados en retroalimentación.'
        },
        {
          question: '¿Qué significa "holístico" en el contexto del principio Piensa y trabaja de forma holística?',
          options: [
            'Involucrar solo a TI',
            'Considerar la organización como un todo integrado',
            'Enfocarse en un departamento',
            'Ignorar dependencias'
          ],
          correct: 1,
          explanation: 'Holístico significa ver la organización como un sistema integrado donde todas las partes están interconectadas y afectan mutuamente.'
        },
        {
          question: '¿Por qué es importante la retroalimentación en ITIL 4?',
          options: [
            'Solo es un requisito de documentación',
            'Permite realizar ajustes y mejoras basados en resultados reales',
            'Para castigar a los empleados',
            'No es importante'
          ],
          correct: 1,
          explanation: 'La retroalimentación es crítica para el ciclo PDCA. Permite entender qué funciona y qué debe mejorarse en cada iteración.'
        },
        {
          question: '¿Cuál es el enfoque de ITIL 4 hacia la automatización?',
          options: [
            'Automatizar todo lo posible',
            'Automatizar solo procesos manuales repetitivos',
            'Usar la automatización de forma inteligente para crear valor',
            'Nunca automatizar'
          ],
          correct: 2,
          explanation: 'ITIL 4 reconoce que la automatización debe servir al propósito de crear valor, no ser un fin en sí mismo.'
        },
        {
          question: '¿Cómo se relacionan los 7 principios entre sí?',
          options: [
            'Son independientes y no se conectan',
            'Trabajan juntos de forma integrada y pueden solaparse',
            'Solo uno es importante',
            'Se aplican secuencialmente'
          ],
          correct: 1,
          explanation: 'Los 7 principios trabajan juntos de forma integrada. Suelen solaparse y reforzarse mutuamente en la práctica.'
        },
        {
          question: '¿Cuál es el rol del cliente en los 7 principios?',
          options: [
            'Solo pagar por servicios',
            'Proporcionar retroalimentación y ser colaborador en el proceso',
            'No tiene rol en ITIL 4',
            'Solo recibir servicios'
          ],
          correct: 1,
          explanation: 'Los 7 principios enfatizan que el cliente es un colaborador activo que proporciona retroalimentación crítica para mejorar continuamente.'
        },
        {
          question: '¿Cómo apoya ITIL 4 la adopción de Agile y DevOps?',
          options: [
            'No los soporta',
            'Proporciona flexibilidad y énfasis en iteración continua compatible con estos enfoques',
            'Los reemplaza completamente',
            'Solo se enfoca en procesos tradicionales'
          ],
          correct: 1,
          explanation: 'ITIL 4 es flexible y compatible con Agile y DevOps gracias a su enfoque en principios y prácticas adaptables.'
        },
        {
          question: '¿Qué significa "Valor" en el contexto del primer principio?',
          options: [
            'Solo dinero',
            'Combinación de utilidad (lo que hace) y garantía (confiabilidad)',
            'Solo la satisfacción del cliente',
            'Solo la eficiencia'
          ],
          correct: 1,
          explanation: 'Valor = Utilidad (¿funciona?) + Garantía (¿es confiable y seguro?). Ambos aspectos son críticos.'
        },
        {
          question: '¿Cuál es el beneficio de aplicar "Comenzar donde estás"?',
          options: [
            'Retrasar cambios indefinidamente',
            'Reducir riesgos y construir sobre la base existente',
            'Ignorar la necesidad de cambios',
            'Asumir cambios radicales sin preparación'
          ],
          correct: 1,
          explanation: 'Comenzar donde estás reduce riesgos, aprovecha inversiones existentes y facilita la transición gradual hacia mejoras.'
        },
        {
          question: '¿Cómo se mide el éxito de aplicar los 7 principios?',
          options: [
            'Solo por documentación completada',
            'Por la creación de valor medible, satisfacción del cliente y mejora continua',
            'Por la cantidad de cambios realizados',
            'No se puede medir'
          ],
          correct: 1,
          explanation: 'El éxito se mide por resultados tangibles: valor creado, objetivos de negocio alcanzados y satisfacción de clientes y empleados.'
        }
      ]
    },
    {
      id: 3,
      name: '⚙️ Las 4 Dimensiones de ITIL 4',
      questions: [
        {
          question: '¿Cuáles son las 4 dimensiones del modelo de ITIL 4?',
          options: [
            'Estrategia, Táctica, Operativa, Ejecutiva',
            'Personas, Procesos, Productos, Proveedores',
            'Organizaciones y Personas, Información y Tecnología, Socios y Proveedores, Flujos de Valor y Procesos',
            'Planificación, Implementación, Mejora, Control'
          ],
          correct: 2,
          explanation: 'Las 4 dimensiones son: Organizaciones y Personas, Información y Tecnología, Socios y Proveedores, y Flujos de Valor y Procesos. Estas dimensiones deben trabajar juntas para entregar valor.'
        },
        {
          question: '¿Cuál dimensión incluye la cultura y la competencia?',
          options: [
            'Información y Tecnología',
            'Socios y Proveedores',
            'Organizaciones y Personas',
            'Flujos de Valor y Procesos'
          ],
          correct: 2,
          explanation: 'La dimensión "Organizaciones y Personas" cubre la cultura organizacional, las competencias requeridas, las estructuras, los roles y las responsabilidades necesarias para la gestión de servicios.'
        },
        {
          question: '¿Qué dimensión se refiere a las herramientas y sistemas?',
          options: [
            'Socios y Proveedores',
            'Información y Tecnología',
            'Organizaciones y Personas',
            'Flujos de Valor y Procesos'
          ],
          correct: 1,
          explanation: '"Información y Tecnología" abarca las herramientas, sistemas, datos y conocimiento necesarios para gestionar los servicios de TI, incluyendo CMDB y otras aplicaciones.'
        },
        {
          question: '¿Cuál dimensión se enfoca en cómo se crean los servicios?',
          options: [
            'Información y Tecnología',
            'Socios y Proveedores',
            'Flujos de Valor y Procesos',
            'Organizaciones y Personas'
          ],
          correct: 2,
          explanation: '"Flujos de Valor y Procesos" describe cómo se ensamblan y coordinan las actividades, recursos y capacidades para crear y entregar servicios que satisfacen las necesidades de los clientes.'
        },
        {
          question: '¿Qué incluye la dimensión "Organizaciones y Personas"?',
          options: [
            'Solo equipos de TI',
            'Estructuras, roles, responsabilidades, cultura, competencias e incentivos',
            'Solo directivos',
            'Únicamente el departamento de recursos humanos'
          ],
          correct: 1,
          explanation: 'Esta dimensión cubre todas las estructuras y capacidades humanas necesarias, incluyendo roles, responsabilidades, competencias, cultura y sistemas de incentivos.'
        },
        {
          question: '¿Qué es un "rol" en el contexto de ITIL 4?',
          options: [
            'Un puesto de trabajo individual',
            'Un conjunto de responsabilidades y actividades que puede ser desempeñado por una o más personas',
            'Solo para gerentes',
            'Un título en la organización'
          ],
          correct: 1,
          explanation: 'Un rol en ITIL es un conjunto de responsabilidades y actividades. Una persona puede tener múltiples roles, y un rol puede ser desempeñado por varias personas.'
        },
        {
          question: '¿Qué elementos incluye la dimensión "Información y Tecnología"?',
          options: [
            'Solo hardware',
            'Herramientas, aplicaciones, datos, información y su gestión',
            'Solo software',
            'Únicamente bases de datos'
          ],
          correct: 1,
          explanation: 'Esta dimensión incluye todas las herramientas, sistemas, aplicaciones, datos e información necesarios para gestionar efectivamente los servicios de TI.'
        },
        {
          question: '¿Qué es el CMDB en el contexto de la dimensión "Información y Tecnología"?',
          options: [
            'Un software de comunicación',
            'Una base de datos que almacena información de elementos de configuración',
            'Un sistema de seguridad',
            'Un programa de capacitación'
          ],
          correct: 1,
          explanation: 'El CMDB (Configuration Management Database) es una parte crítica de la dimensión Información y Tecnología que almacena datos sobre todos los elementos de configuración.'
        },
        {
          question: '¿Qué abarca la dimensión "Socios y Proveedores"?',
          options: [
            'Solo proveedores de software',
            'Relaciones con otros proveedores de servicios, contratistas y aliados',
            'Solo contratistas',
            'Únicamente relaciones con clientes'
          ],
          correct: 1,
          explanation: 'Esta dimensión cubre todas las relaciones externas necesarias para entregar servicios, incluyendo proveedores, contratistas y socios estratégicos.'
        },
        {
          question: '¿Cuál es la importancia de gestionar las relaciones con proveedores?',
          options: [
            'No es importante',
            'Asegurar que los proveedores contribuyan al valor entregado',
            'Solo para reducir costos',
            'Para aislar la organización'
          ],
          correct: 1,
          explanation: 'La gestión efectiva de relaciones con proveedores asegura que contribuyan adecuadamente a la creación de valor y cumpla con los SLA.'
        },
        {
          question: '¿Qué describe la dimensión "Flujos de Valor y Procesos"?',
          options: [
            'Solo procesos de TI',
            'Cómo se organizan y ejecutan las actividades para entregar valor',
            'Solo procedimientos documentados',
            'Exclusivamente procesos de contabilidad'
          ],
          correct: 1,
          explanation: 'Esta dimensión describe cómo se ensamblan y coordinan los flujos de valor y procesos para crear y entregar servicios.'
        },
        {
          question: '¿Cuál es la diferencia entre un proceso y un flujo de valor?',
          options: [
            'No hay diferencia',
            'Un proceso es un conjunto de actividades; un flujo de valor muestra cómo estos crean valor',
            'Solo existen procesos',
            'Solo existen flujos de valor'
          ],
          correct: 1,
          explanation: 'Un proceso es una secuencia de actividades. Un flujo de valor es cómo estas actividades se integran para crear valor para el cliente.'
        },
        {
          question: '¿Por qué las 4 dimensiones trabajan juntas?',
          options: [
            'Son independientes',
            'Para asegurar que todos los aspectos de la gestión de servicios se abordan holísticamente',
            'No trabajan juntas',
            'Solo la primera dimensión es importante'
          ],
          correct: 1,
          explanation: 'Las 4 dimensiones están interrelacionadas. Ninguna puede funcionar eficientemente sin las otras para entregar valor completo.'
        },
        {
          question: '¿Cuál dimensión trata los incentivos y la motivación?',
          options: [
            'Información y Tecnología',
            'Socios y Proveedores',
            'Flujos de Valor y Procesos',
            'Organizaciones y Personas'
          ],
          correct: 3,
          explanation: 'La dimensión Organizaciones y Personas incluye sistemas de incentivos y motivación necesarios para que el personal actúe alineado con objetivos.'
        },
        {
          question: '¿Qué implica la "gobernanza" en la dimensión Organizaciones y Personas?',
          options: [
            'Solo decisiones de contabilidad',
            'El sistema de gestión, supervisión y toma de decisiones',
            'Solo autoridades externas',
            'No es importante'
          ],
          correct: 1,
          explanation: 'La gobernanza es parte de la dimensión que define quién toma decisiones y cómo se toman en la organización.'
        },
        {
          question: '¿Cuál es el rol de la "información" en la gestión de servicios?',
          options: [
            'Solo documentación',
            'Permitir la toma de decisiones informadas y mejorar continuamente',
            'No es necesaria',
            'Solo para auditorías'
          ],
          correct: 1,
          explanation: 'La información es crítica para tomar decisiones basadas en datos y para monitorear y mejorar continuamente los servicios.'
        },
        {
          question: '¿Cómo afecta la cultura organizacional a la gestión de servicios?',
          options: [
            'No afecta',
            'Influye en cómo se aceptan cambios, colaboración y enfoque en el cliente',
            'Solo afecta al marketing',
            'Afecta negativamente'
          ],
          correct: 1,
          explanation: 'Una cultura orientada al cliente y a la mejora continua es esencial para el éxito de la gestión de servicios según ITIL 4.'
        },
        {
          question: '¿Qué se entiende por "capacidad" en el contexto de dimensiones?',
          options: [
            'Solo la cantidad de servidores',
            'La habilidad de la organización para realizar actividades y entregar valor',
            'Solo personal técnico',
            'El presupuesto disponible'
          ],
          correct: 1,
          explanation: 'La capacidad en ITIL incluye todas las habilidades, recursos y procesos necesarios para entregar servicios de calidad.'
        },
        {
          question: '¿Cuál es un ejemplo de elemento en la dimensión Información y Tecnología?',
          options: [
            'El organigrama',
            'Un servidor, una aplicación, o datos en una base de datos',
            'Una política de vacaciones',
            'Un contrato de cliente'
          ],
          correct: 1,
          explanation: 'Servidores, aplicaciones, datos y sistemas son ejemplos claros de elementos en la dimensión Información y Tecnología.'
        }
      ]
    }
  ];

  const handleAnswerSelect = (index) => {
    if (!answered) {
      setSelectedAnswer(index);
      setShowExplanation(false);
    }
  };

  const handleSubmitAnswer = () => {
    if (selectedAnswer === null) return;
    
    const isCorrect = selectedAnswer === modules[currentModule].questions[currentQuestion].correct;
    
    if (isCorrect) {
      setScore(score + 1);
    }
    
    setAnswered(true);
    setShowExplanation(true);
  };

  const handleNextQuestion = () => {
    const totalQuestions = modules[currentModule].questions.length;
    
    if (currentQuestion < totalQuestions - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setAnswered(false);
      setShowExplanation(false);
    } else {
      completeModule();
    }
  };

  const completeModule = () => {
    const totalQuestions = modules[currentModule].questions.length;
    const percentage = Math.round((score / totalQuestions) * 100);
    
    setModuleStats({
      ...moduleStats,
      [currentModule]: { score, total: totalQuestions, percentage }
    });
    
    setCurrentModule(null);
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setScore(0);
    setAnswered(false);
    setShowExplanation(false);
  };

  if (currentModule === null) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-600 to-blue-800 p-4 md:p-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">🎓 ITIL 4 Foundations</h1>
            <p className="text-xl text-blue-100">Cuestionarios Prácticos Interactivos</p>
            <p className="text-blue-200 mt-2">Aprende de manera efectiva y preparate para el examen</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {modules.map((module, index) => {
              const stats = moduleStats[index];
              return (
                <div
                  key={module.id}
                  onClick={() => setCurrentModule(index)}
                  className="bg-white rounded-lg shadow-lg p-6 cursor-pointer hover:shadow-xl transition-all hover:scale-105 transform"
                >
                  <h3 className="text-lg font-bold text-gray-800 mb-2">{module.name}</h3>
                  <p className="text-gray-600 mb-4">{module.questions.length} preguntas</p>
                  {stats && (
                    <div className="bg-blue-50 p-3 rounded">
                      <p className="text-sm font-semibold text-blue-700">
                        Puntuación: {stats.score}/{stats.total} ({stats.percentage}%)
                      </p>
                    </div>
                  )}
                  <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded font-semibold hover:bg-blue-700 transition">
                    {stats ? 'Repasar' : 'Comenzar'}
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  const question = modules[currentModule].questions[currentQuestion];
  const totalQuestions = modules[currentModule].questions.length;
  const isAnswerCorrect = selectedAnswer === question.correct;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 to-blue-800 p-4 md:p-8">
      <div className="max-w-2xl mx-auto">
        <button
          onClick={() => setCurrentModule(null)}
          className="mb-6 text-white hover:text-blue-200 flex items-center gap-2 font-semibold"
        >
          ← Volver al menú
        </button>

        <div className="bg-white rounded-lg shadow-xl p-8">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              {modules[currentModule].name}
            </h2>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">
                Pregunta {currentQuestion + 1} de {totalQuestions}
              </span>
              <div className="w-32 h-2 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-blue-600 transition-all"
                  style={{ width: `${((currentQuestion + 1) / totalQuestions) * 100}%` }}
                ></div>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-6">
              {question.question}
            </h3>

            <div className="space-y-3 mb-6">
              {question.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswerSelect(index)}
                  disabled={answered}
                  className={`w-full p-4 text-left rounded-lg border-2 transition-all ${
                    selectedAnswer === index
                      ? isAnswerCorrect && answered
                        ? 'border-green-500 bg-green-50'
                        : 'border-red-500 bg-red-50'
                      : answered && index === question.correct
                      ? 'border-green-500 bg-green-50'
                      : 'border-gray-200 hover:border-blue-400'
                  } ${answered ? 'cursor-default' : 'cursor-pointer'}`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-gray-800">{option}</span>
                    {answered && index === question.correct && (
                      <CheckCircle className="w-6 h-6 text-green-500" />
                    )}
                    {answered && selectedAnswer === index && !isAnswerCorrect && (
                      <XCircle className="w-6 h-6 text-red-500" />
                    )}
                  </div>
                </button>
              ))}
            </div>

            {showExplanation && (
              <div className={`p-4 rounded-lg ${isAnswerCorrect ? 'bg-green-50' : 'bg-blue-50'}`}>
                <p className={`font-semibold ${isAnswerCorrect ? 'text-green-800' : 'text-blue-800'} mb-2`}>
                  {isAnswerCorrect ? '✓ Correcto' : 'Explicación'}
                </p>
                <p className="text-gray-700">{question.explanation}</p>
              </div>
            )}
          </div>

          <div className="flex gap-4">
            {!answered ? (
              <button
                onClick={handleSubmitAnswer}
                disabled={selectedAnswer === null}
                className="flex-1 bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition"
              >
                Enviar Respuesta
              </button>
            ) : (
              <button
                onClick={handleNextQuestion}
                className="flex-1 bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition flex items-center justify-center gap-2"
              >
                {currentQuestion < totalQuestions - 1 ? (
                  <>Siguiente Pregunta <ChevronRight className="w-5 h-5" /></>
                ) : (
                  <>Completar Módulo</>
                )}
              </button>
            )}
          </div>

          <div className="mt-4 text-center text-sm text-gray-600">
            Puntuación actual: {score}/{currentQuestion + (answered ? 1 : 0)}
          </div>
        </div>
      </div>
    </div>
  );
}
