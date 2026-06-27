# Warriors Zac — Sitio Web

Prototipo del sitio web oficial de **Warriors Zac**, plataforma de entrenamiento deportivo élite.

## Estructura del proyecto

```
warriors-zac/
├── index.html            ← Página principal
├── css/
│   └── styles.css        ← Todos los estilos (variables, componentes, responsive)
├── js/
│   └── main.js           ← Interactividad: menú, animaciones, contadores
└── assets/
    └── img/
        └── logo.svg      ← Logo oficial Warriors Zac
```

## Cómo usar

1. Descarga o clona todos los archivos manteniendo la estructura de carpetas.
2. Abre `index.html` directamente en tu navegador — no requiere servidor.
3. Para desarrollo, se recomienda usar Live Server (VS Code) o cualquier servidor local.

## Tecnologías

- **HTML5** semántico con atributos ARIA de accesibilidad
- **CSS3** con variables custom, Grid y Flexbox
- **JavaScript** vanilla (sin dependencias)
- **Tabler Icons** (CDN) para los iconos

## Paleta de colores

| Token              | Valor                    | Uso                        |
|--------------------|--------------------------|----------------------------|
| `--wz-orange`      | `#fb4402`                | Color principal de marca   |
| `--wz-orange-dim`  | `#c93600`                | Hover de botones           |
| `--wz-orange-glow` | `rgba(251,68,2,0.15)`    | Fondos y brillos           |
| `--wz-black`       | `#0d0d0d`                | Fondo principal            |
| `--wz-dark`        | `#141414`                | Fondo de secciones alternas|
| `--wz-card`        | `#1a1a1a`                | Tarjetas y paneles         |
| `--wz-text`        | `#f0ece8`                | Texto principal            |
| `--wz-muted`       | `#8a8580`                | Texto secundario           |

## Breakpoints responsive

| Breakpoint | Ancho       | Comportamiento                          |
|------------|-------------|-----------------------------------------|
| Desktop    | > 768px     | Layout completo con grids de 2-4 col    |
| Tablet     | ≤ 768px     | Grids de 1-2 col, menú hamburguesa      |
| Móvil      | ≤ 480px     | Una columna, botones de ancho completo  |

## Secciones incluidas

- **Navegación sticky** con menú hamburguesa en móvil
- **Hero** con mini-dashboard de estadísticas
- **Strip** de métricas destacadas
- **Disciplinas** (Running, Natación, Ciclismo, Fuerza)
- **Funcionalidades** (Planes, Progreso, Videollamadas, Comunidad)
- **Relojes inteligentes** (Apple Watch, Garmin, Wear OS)
- **Testimonios** de atletas
- **CTA final** con efecto de resplandor
- **Footer** con links legales

## Próximos pasos sugeridos

- [ ] Agregar más disciplinas deportivas
- [ ] Integrar sección de precios/planes
- [ ] Crear páginas internas (perfil, dashboard)
- [ ] Desarrollar la app móvil (React Native)
- [ ] Conectar backend (API de entrenamientos)
