En este ejercicio se ha creado un sitio web de muebles: "furniture shop"; utilizando angular js, jQuery, boostrap y parsley (validador de formularios);

En definitiva se ha creado un 'index.html' que contiene como elementos estáticos en su 'body' el 'footer' y el 'header' (navbar y navtabs) y como elemento dinámico un 'div' inmediatamente anterior a la apertura del 'footer'.

El contenido de este 'div' va actualizándose de acuerdo a la ruta en la que nos encontremos mediante 'vistas' (views); utilizándose para ello el módulo ngRoute y la directiva ng-view de angular js. Existen un total de 4 vistas: 

- la asociada a la ruta /#/ ('/' en app.config): 'homeView.html'; que consta de un carousel de boostrap con los artesanos que trabajan los muebles, una serie de botones (all, tables, sofas, pufs) y una galería de imágenes que se filtra dinámicamente al hacer click sobre dichos botones (directiva ng-click & myFilter value) y que muetsran información sobre el producto al hacer hover (directiva ng-mousehover & myFilter value)

- la asociada a la ruta /#/views/all y /#/views/category ('/views/all' & '/views/:category' en app.config): 'productView.html' que se accede a través del dropdown menu del header (navtabs) y que muestra una colección de muebles concreta meadiante filtros (products(/#/views/all): todas las categorías; tables: sólo la categoría 'table'(/#/views/table); sofas: sólo la categoría 'sofa' (/#/views/sofa); pufs: sólo la categoría 'puf'(/#/views/puf)) prestablecido al hacer click sobre el dropdown menu (directiva ng-click & myFilter value).

- la asociada a la ruta /#/views/category/id ('/views/:category/:id' en app.config): 'specificProductView.html'; que se accede al hacer click sobre cualquiera de los productos de la galería abierta desde el dropdown menu haciendo uso de un segundo 'scope' dentro del controlador común a todas las vistas (HomeViewController): items; calculado a partir del scope original (products) y el $routeParams.id que corresponda.

- la asociada a la ruta /#/views/contact ('/views/contact'): 'views/formView.html'. Aunque a esta vista se le ha asignado un controlador ('FormViewController') éste no se ha llegado a definir en ningún momento por considerarse innecesario con posterioridad al no hacerse uso en esta vista de los datos del json de muebles (motivo que explica el error que se detona en angularjs al acceder a dicha vista; bastaría con asignarle la de HomeViewController por ejemplo y listo....porque no se puede dejar en vacío ¿no?).

		
RETOS: creacion de filtros; creación de scopes; conflicto boostrap carousel y ngRoute (en la pagina de boostrap se facilita una platilla http://v4-alpha.getbootstrap.com/components/carousel/; en la que al aparecer un href en las flechas de movimeinto a izquierda y derecha, entra en conflicto con el modulo ngRoute de angular; dejando de funcionar como debería. Cambiando dicho href por un 'data-target' se soluciona el problema.) etc.

DEUDA TECNICA: aparte del beutiful design (hubiera estado genial añadir más efectos de mouse-hover y tal); la validación del formulario final mediante la librería parsleyjs deja un tanto que desear. 

Genial trabajar con Irene Gutierrez; ¡super persistente y ordenada!

¡Un saludo!

Paz rg
