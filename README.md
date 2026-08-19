# 🎓 ITIL 4 Foundations - Cuestionarios Prácticos

Aplicación interactiva de cuestionarios para prepararse para el examen de certificación ITIL 4 Foundations.

**10 módulos con 200+ preguntas**, explicaciones detalladas y seguimiento de progreso.

---

## 🚀 Cómo Desplegar en Vercel (Guía Paso a Paso)

### **PASO 1: Preparar el Proyecto Localmente**

1. **Descargar/Guardar todos los archivos**
   - Crea una carpeta en tu computadora llamada `itil4-quiz`
   - Descarga todos los archivos que se proporciona en esta carpeta

2. **Estructura de carpetas esperada:**
```
itil4-quiz/
├── app/
│   ├── layout.jsx
│   ├── page.jsx
│   └── globals.css
├── package.json
├── next.config.js
├── .gitignore
└── README.md
```

---

### **PASO 2: Subir a GitHub**

La manera más fácil es usar GitHub (es gratis):

1. **Crear una cuenta en GitHub** (si no tienes):
   - Ve a https://github.com
   - Click en "Sign up"
   - Completa el registro

2. **Crear un repositorio nuevo**:
   - En GitHub, click en el + arriba a la derecha
   - Selecciona "New repository"
   - Nombre: `itil4-quiz`
   - Descripción: `ITIL 4 Foundations Practice Quiz`
   - Selecciona "Public"
   - Click en "Create repository"

3. **Subir los archivos a GitHub**:
   - En la página del repositorio, click en "uploading an existing file"
   - O descarga Git: https://git-scm.com/download
   - Abre terminal/CMD en la carpeta `itil4-quiz`
   - Ejecuta estos comandos:

```bash
git init
git add .
git commit -m "Initial commit - ITIL 4 Quiz App"
git branch -M main
git remote add origin https://github.com/TUUSERNAME/itil4-quiz.git
git push -u origin main
```

*(Reemplaza TUUSERNAME con tu usuario de GitHub)*

---

### **PASO 3: Conectar Vercel**

1. **Ve a Vercel**:
   - Abre https://vercel.com
   - Click en "Sign Up"
   - Elige "Continue with GitHub"
   - Autoriza Vercel

2. **Importar el proyecto**:
   - Click en "Add New" → "Project"
   - Busca y selecciona `itil4-quiz`
   - Click en "Import"

3. **Configurar (opcional)**:
   - Framework Preset: **Next.js** (debe detectarse automáticamente)
   - Root Directory: `.` (dejar por defecto)
   - Click en "Deploy"

4. **¡Listo!**
   - Vercel desplegará automáticamente
   - Te dará una URL como: `https://itil4-quiz-xxxxx.vercel.app`

---

## 📱 Cómo Usar la Aplicación

### **Desde el Navegador (Computadora o Celular)**:
1. Abre la URL de Vercel que te proporciona
2. Elige un módulo para comenzar
3. Lee cada pregunta cuidadosamente
4. Selecciona tu respuesta
5. Lee la explicación para aprender

### **Características**:
- ✅ 200+ preguntas de práctica
- ✅ 10 módulos temáticos
- ✅ Explicaciones detalladas
- ✅ Seguimiento de progreso
- ✅ Interfaz amigable
- ✅ Funciona en cualquier dispositivo

---

## 📊 Módulos Disponibles

1. **📋 Conceptos Fundamentales de ITIL** (20 preguntas)
2. **🔄 Los 7 Principios Guía de ITIL 4** (20 preguntas)
3. **⚙️ Las 4 Dimensiones de ITIL 4** (20 preguntas)
4. **🎯 Cadena de Valor del Servicio** (20 preguntas)
5. **📊 Prácticas Clave de ITIL 4** (20 preguntas)
6. **🔐 Gestión de Cambios y Configuración** (20 preguntas)
7. **🎪 Gestión de Incidentes y Problemas** (20 preguntas)
8. **📈 Gestión de Disponibilidad y Continuidad** (20 preguntas)
9. **💰 Gestión Financiera y de Niveles de Servicio** (20 preguntas)
10. **🚀 Mejora Continua y Transformación Digital** (20 preguntas)

---

## 💡 Consejos para Estudiar

1. **Dedica 30-45 minutos por módulo**
2. **Repite módulos difíciles 2-3 veces**
3. **Lee las explicaciones cuidadosamente**
4. **Toma notas de conceptos clave**
5. **Practica regularmente (4-5 veces por semana)**
6. **Intenta aprobar con 65% antes de pasar al siguiente**

---

## 🆘 Solución de Problemas

### **Si no aparecen las preguntas completas:**
- Recarga la página (F5)
- Limpia el caché del navegador
- Intenta en otro navegador

### **Si Vercel muestra error:**
- Espera 5 minutos y recarga
- Verifica que todos los archivos se subieron correctamente
- Abre la consola de Vercel y mira los logs

### **¿Necesitas cambiar algo?**
- Edita los archivos en tu repositorio de GitHub
- Vercel se redesplegará automáticamente

---

## 📞 Información del Examen Real

- **Formato**: 40 preguntas de opción múltiple
- **Tiempo**: 75 minutos
- **Aprobación**: 65% (26 de 40 preguntas)
- **Contenido**: Basado en Jason Dion y Value Insights ITIL

---

## 📝 Notas Importantes

- Esta aplicación NO es oficial de AXELOS/ITIL
- Es una herramienta de práctica educativa
- Para el examen oficial, registrate en https://www.axelos.com/
- Las preguntas están basadas en material oficial pero adaptadas para comprensión

---

## ✨ ¿Quieres más funcionalidades?

Esta es una versión base. Se puede agregar:
- Exámenes simulados completos
- Reportes detallados
- Modo offline
- Exportar resultados

¡Contacta si necesitas customizaciones!

---

**¡Éxito estudiando! 🎓**

Hecho con ❤️ para ayudarte a aprobar ITIL 4 Foundations
