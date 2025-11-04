import './bootstrap';
import '../css/app.css';
import { createRoot } from 'react-dom/client';
import { Ziggy } from './ziggy';  // ⚠️ Ajusta la ruta si está en otra carpeta
import { route } from 'ziggy-js';
import { createInertiaApp } from '@inertiajs/react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

window.Ziggy = Ziggy;
window.route = (name, params, absolute) => route(name, params, absolute, Ziggy);


createInertiaApp({
  resolve: (name) => {
    const pages = import.meta.glob('./Pages/**/*.jsx', { eager: true });
    return pages[`./Pages/${name}.jsx`];
  },
  setup({ el, App, props }) {
    createRoot(el).render(<App {...props} />);
  },
});

