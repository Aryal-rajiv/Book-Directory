<?php
//We are using online version of css

function add_normalize_CSS(){
    wp_enque_style('normalize-styles' , "https://cdnjs.cloudflare.com/ajax/libs/normalize/7.0.0/normalize.min.css");
}
add_action('wp_enque_scripts' , 'add_normalize_CSS');



//Sidebar rakhna paryo 
function add_widget_support(){
    register_sidebar(array(
        'name' => 'sidebar',
         'id'  => 'sidebar',
         'before_widget' => '<div>',
         'after_widget'  => '</div>',
         'before_title'  =>  '<h2>' ,
         'after_title'   =>   '</h2>',
    ));
}
// Hook the widget initiation and run our function
add_action('widget_init' , 'add_widget_support');

//Register a navigation menu
function add_Main_Nav(){
    register_nav_menu('header-menu' , _('header menu'));
}
add_action('init' , 'add_Main_Nav');
?>