=========================================
OLIMPIADA NACIONAL DE PROGRAMACIÓN 2025
=========================================

 ESTRUCTURA DE CARPETAS:

/Proyecto/
├── backend/               → Backend con Node.js (API REST)
├── frontend/              → Frontend con React + Bootstrap
├── script_base_datos.sql  → Script para crear las tablas MySQL
├── capturas/              → Imágenes del funcionamiento
├── video.mp4              → Demostración de uso
└── README.txt             → Este archivo

---

✅ REQUISITOS PARA PROBAR LA APP:

🔧 Instalaciones necesarias:
- Node.js (v14 o superior) → https://nodejs.org
- MySQL
- npm (se instala con Node.js)

---

📦 PASOS PARA EJECUTAR EL PROYECTO:

1. 🛠️ BASE DE DATOS:

- Abrir MySQL Workbench o phpMyAdmin
- Ejecutar el archivo `script_base_datos.sql`
  (crea la base `turismo` y todas las tablas)

- Insertar productos de prueba si está vacío:

```sql
INSERT INTO Producto (codigo_producto, descripcion, precio_unitario)
VALUES 
('PKG001', 'Viaje a Bariloche 5 días', 85000),
('PKG002', 'Tour por Cataratas + hotel', 92000),
('PKG003', 'San Rafael con excursiones', 78000);


---

2. ⚙️ BACKEND (API REST):



Abrir una terminal en la carpeta backend

Instalar dependencias:


npm install

Crear archivo .env con esto:


DB_HOST=localhost
DB_USER=root
DB_PASSWORD=TU_CONTRASEÑA
DB_NAME=turismo

Iniciar el servidor:


node server.js

✅ El backend debería mostrar:

Conectado a MySQL
Servidor backend corriendo en puerto 3001


---

3. 🎨 FRONTEND (React):



Abrir otra terminal en la carpeta frontend

Instalar dependencias:


npm install

Iniciar la app:


npm start

✅ Se abre automáticamente en: http://localhost:3000