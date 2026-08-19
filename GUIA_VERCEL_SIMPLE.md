# 🎓 GUÍA SIMPLE: Cómo Poner la App en Vercel

*Para personas sin experiencia técnica*

---

## ✅ PASO 1: Crear una Cuenta en GitHub (5 minutos)

### ¿Qué es GitHub?
Es un lugar online donde guardamos archivos de código (como una "nube" para programadores).

**Pasos:**
1. Abre tu navegador
2. Ve a: https://github.com
3. Click en **"Sign up"** (arriba a la derecha)
4. Completa el formulario:
   - Email: tu email personal
   - Contraseña: elige una segura
   - Username: elige un nombre (ejemplo: `tu_nombre_2024`)
5. Verifica tu email (GitHub te enviará un código)
6. ¡Listo! Ya tienes cuenta en GitHub

---

## ✅ PASO 2: Crear un Repositorio (Nueva "carpeta" en GitHub)

**Pasos:**
1. Inicia sesión en GitHub
2. En la esquina superior derecha, busca el **"+"** 
3. Click en **"New repository"**
4. Completa así:
   - **Repository name:** `itil4-quiz`
   - **Description:** `App para estudiar ITIL 4`
   - **Visibility:** Elige **"Public"** (que sea visible)
   - Deja todo lo demás igual
5. Click en **"Create repository"**

¡Ya tienes tu repositorio! Ahora lo guardamos en una carpeta en tu computadora.

---

## ✅ PASO 3: Descargar los Archivos

**Los 7 archivos que necesitas son:**

```
📁 itil4-quiz/
├── 📄 package.json
├── 📄 next.config.js
├── 📄 .gitignore
├── 📄 README.md
├── 📁 app/
│   ├── 📄 layout.jsx
│   ├── 📄 page.jsx
│   └── 📄 globals.css
```

**Cómo hacerlo:**
1. Descarga todos los archivos que se proporcionan
2. Crea una carpeta en tu computadora llamada: `itil4-quiz`
3. Guarda todos los archivos en esa carpeta respetando la estructura

---

## ✅ PASO 4: Subir los Archivos a GitHub (OPCIÓN A - MÁS FÁCIL)

### Opción A: Usando GitHub.com directamente (SIN instalaciones)

**Pasos:**
1. Abre GitHub y ve a tu repositorio `itil4-quiz`
2. Click en **"Add file"** → **"Upload files"**
3. Arrastra Y suelta los archivos desde tu carpeta a la página
   - O click en **"choose your files"** y selecciona

**IMPORTANTE: Respetar la carpeta "app"**
- Primero sube `package.json`, `next.config.js`, `.gitignore`, `README.md` a la raíz
- Luego crea una carpeta `app` dentro del repo
- Sube `layout.jsx`, `page.jsx`, `globals.css` dentro de `app`

4. Click en **"Commit changes"**
5. ¡Listo! Los archivos están en GitHub

---

## ✅ PASO 5: Crear Cuenta en Vercel (5 minutos)

**¿Qué es Vercel?**
Es un servicio que toma tu código de GitHub y lo "pone vivo" en internet.

**Pasos:**
1. Abre tu navegador
2. Ve a: https://vercel.com
3. Click en **"Sign Up"** (arriba a la derecha)
4. Click en **"Continue with GitHub"**
5. GitHub te pedirá confirmar - click en **"Authorize Vercel"**
6. Completa el perfil básico
7. ¡Listo! Tienes cuenta en Vercel

---

## ✅ PASO 6: Importar el Proyecto a Vercel (10 minutos)

**Este es el paso más importante:**

1. En Vercel, vas al **Dashboard**
2. Click en **"Add New"** → **"Project"**
3. Verás una lista de tus repositorios de GitHub
4. Busca **`itil4-quiz`** y click en el botón **"Import"**
5. Vercel te mostrará opciones de configuración:
   - **Framework Preset:** Debería detectar automáticamente **Next.js** ✓
   - **Root Directory:** Deja como está `.`
   - **Environment Variables:** Deja vacío
6. Click en **"Deploy"** (botón grande azul)

**ESPERA:** Vercel estará compilando/construyendo tu app (toma 2-5 minutos)

Verás una pantalla con:
- Un círculo girando o porcentaje
- Cuando terminé, verás ✅ "Deployment successful"

---

## ✅ PASO 7: ¡Tu App está VIVA! 🎉

Cuando Vercel termina, te mostrará:
- Una URL como: `https://itil4-quiz-xxxxx.vercel.app`
- Botón "Visit" para abrir

**¡Esa es la URL que tu papá puede usar!**

Cópiala y comparte con tu papá. Puede abrir en:
- Navegador del celular
- Navegador de la computadora
- Cualquier dispositivo con internet

---

## 📱 Cómo Tu Papá Usa la App

1. Abre el navegador (Chrome, Firefox, Safari, etc.)
2. Copia la URL: `https://itil4-quiz-xxxxx.vercel.app`
3. Pega en la barra de direcciones
4. ¡Aparecerá la app!

**Desde el celular:**
- Igual, pero en el navegador del celular
- Puedes marcar como "Favorito" para acceso rápido

---

## 🎯 Checklist Final

- [ ] Cuenta de GitHub creada
- [ ] Repositorio `itil4-quiz` creado en GitHub
- [ ] 7 archivos subidos a GitHub (respetando carpetas)
- [ ] Cuenta de Vercel creada
- [ ] Proyecto importado a Vercel
- [ ] Deploy completado
- [ ] URL compartida con tu papá

---

## 🆘 Si Algo Sale Mal

### "No veo la opción de subir archivos"
- Asegúrate de estar en tu repositorio (no en la página principal de GitHub)
- Click en tu avatar → "Your repositories" → `itil4-quiz`

### "El Deploy falla"
- Verifica que los archivos están en las carpetas correctas
- Que NO haya carpetas extras o mal nombradas
- Actualiza la página y reinicia el deploy

### "No aparece la app en Vercel"
- Espera 5 minutos, a veces es lento
- Recarga la página de Vercel
- Si sigue, ve al tab "Deployments" y ve si hay errores

### "¿Cómo cambio algo?"
- Edita el archivo en GitHub
- Vercel se redesplegará automáticamente
- Tarda unos minutos

---

## 💡 Próximos Pasos (OPCIONAL)

Si todo funciona bien y quieres mejorar:

1. **Agregar más preguntas**
   - Edita `app/page.jsx`
   - Agrega preguntas en el array `modules`

2. **Cambiar colores**
   - Edita `app/globals.css`
   - Busca "blue-600" y cambia a otros colores

3. **Cambiar título**
   - Edita `app/layout.jsx`
   - Busca "ITIL 4 Foundations"

Luego, GitHub + Vercel actualizan automáticamente.

---

## ✨ ¡Felicidades! 🎊

Tu app está VIVA en internet. Cualquiera con el enlace puede acceder desde cualquier lugar del mundo.

**URL para compartir con tu papá:**
```
https://itil4-quiz-xxxxx.vercel.app
(Reemplaza xxxxx con el código único de Vercel)
```

---

**¿Necesitas ayuda?**
- Problema con GitHub: ve a https://github.com/contact/
- Problema con Vercel: ve a https://vercel.com/help
- General: busca en YouTube "Vercel deploy from GitHub" - hay tutoriales visuales

**¡Mucho éxito con el estudio de ITIL 4! 🚀**
