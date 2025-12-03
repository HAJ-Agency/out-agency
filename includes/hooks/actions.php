<?php

namespace Out\Includes\Hooks;

/**
 * Enqueue styles and scripts.
 * 
 * @see https://developers.google.com/speed/libraries#jquery
 * @since 1.0.0
 */
add_action('wp_enqueue_scripts', __NAMESPACE__ . '\out_enqueue_assets');

function out_enqueue_assets() {
   // wp_register_script('jquery');
   wp_enqueue_script('jquery', 'https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js', [], null, true);
   wp_enqueue_style(
      'global',
      get_stylesheet_directory_uri() . '/build/assets/css/critical/global.css',
      [],
      filemtime(get_stylesheet_directory() . '/build/assets/css/critical/global.css')
   );
   wp_enqueue_style(
      'header',
      get_stylesheet_directory_uri() . '/build/assets/css/header.css',
      [],
      filemtime(get_stylesheet_directory() . '/build/assets/css/header.css')
   );
   wp_enqueue_style(
      'button',
      get_stylesheet_directory_uri() . '/build/assets/css/button.css',
      [],
      filemtime(get_stylesheet_directory() . '/build/assets/css/button.css')
   );
   wp_enqueue_style(
      'formidable-custom',
      get_stylesheet_directory_uri() . '/build/assets/css/formidable.css',
      [],
      filemtime(get_stylesheet_directory() . '/build/assets/css/formidable.css')
   );
   wp_enqueue_style(
      'modal',
      get_stylesheet_directory_uri() . '/build/assets/css/modal.css',
      [],
      filemtime(get_stylesheet_directory() . '/build/assets/css/modal.css')
   );
   wp_enqueue_style(
      'footer',
      get_stylesheet_directory_uri() . '/build/assets/css/footer.css',
      [],
      filemtime(get_stylesheet_directory() . '/build/assets/css/footer.css')
   );
   wp_enqueue_style(
      'case-blocks',
      get_stylesheet_directory_uri() . '/build/assets/css/case-blocks.css',
      [],
      filemtime(get_stylesheet_directory() . '/build/assets/css/case-blocks.css')
   );
   wp_enqueue_script(
      'formidable-ext',
      get_stylesheet_directory_uri() . '/build/assets/js/formidable.ext.js',
      ['jquery'],
      filemtime(get_stylesheet_directory() . '/build/assets/js/formidable.ext.js'),
      array(
         'strategy'  => 'defer',
         'in_footer' => true,
      )
   );
   wp_enqueue_script(
      'global',
      get_stylesheet_directory_uri() . '/build/assets/js/global.js',
      ['jquery'],
      filemtime(get_stylesheet_directory() . '/build/assets/js/global.js'),
      array(
         'strategy'  => 'defer',
         'in_footer' => true,
      )
   );
   wp_enqueue_script(
      'header',
      get_stylesheet_directory_uri() . '/build/assets/js/header.js',
      ['jquery'],
      filemtime(get_stylesheet_directory() . '/build/assets/js/header.js'),
      [
         'strategy'  => 'defer',
         'in_footer' => true,
      ]
   );
   wp_register_script(
      'jquery-ui-cdn',
      'https://code.jquery.com/ui/1.14.1/jquery-ui.min.js',
      ['jquery'],
      '1.14.1',
      array(
         'strategy'  => 'defer',
         'in_footer' => true,
      )
   );
   wp_register_style(
      'jquery-ui-css',
      'https://code.jquery.com/ui/1.14.1/themes/base/jquery-ui.css',
      [],
      '1.14.1'
   );

   wp_enqueue_script(
      'modal',
      get_stylesheet_directory_uri() . '/build/assets/js/modal.js',
      ['jquery', 'jquery-ui-cdn'],
      '',
      array(
         'strategy'  => 'defer',
         'in_footer' => true,
      )
   );

   wp_enqueue_script(
      'accordion-button',
      get_stylesheet_directory_uri() . '/build/assets/js/accordion-button.js',
      ['jquery', 'jquery-ui-cdn'],
      '',
      array(
         'strategy'  => 'defer',
         'in_footer' => true,
      )
   );
}


/**
 * Enqueue admin styles and scripts.
 * 
 * @since 1.0.0
 */
add_action('admin_enqueue_scripts', __NAMESPACE__ . '\out_enqueue_admin_assets', 10);

function out_enqueue_admin_assets() {
   wp_enqueue_style(
      'tiburon-wp-admin',
      get_stylesheet_directory_uri() . '/build/assets/css/admin/wp-admin.css',
      [],
      filemtime(get_stylesheet_directory() . '/build/assets/css/admin/wp-admin.css')
   );
   wp_enqueue_script(
      'remove-default-btn',
      get_stylesheet_directory_uri() . '/build/assets/js/remove-default-btn.js',
      ['wp-blocks'],
      filemtime(get_stylesheet_directory() . '/build/assets/js/remove-default-btn.js'),
      true
   );
   wp_enqueue_style(
      'tiburon-editor-admin',
      get_stylesheet_directory_uri() . '/build/assets/css/admin/editor.admin.css',
      [],
      filemtime(get_stylesheet_directory() . '/build/assets/css/admin/editor.admin.css')
   );

   wp_enqueue_style(
      'button',
      get_stylesheet_directory_uri() . '/build/assets/css/button.css',
      [],
      filemtime(get_stylesheet_directory() . '/build/assets/css/button.css')
   );
}

add_action('enqueue_block_assets', __NAMESPACE__ . '\extend_block_assets');
function extend_block_assets() {
   $is_gutenberg_editor = is_admin() && get_current_screen()->is_block_editor();

   wp_enqueue_style(
      'image-block-ext-style',
      get_stylesheet_directory_uri() . '/build/assets/css/image-block.ext.css',
      [],
      filemtime(get_stylesheet_directory() . '/build/assets/css/image-block.ext.css')
   );
   if ($is_gutenberg_editor) {
      // EXTEND script
      wp_enqueue_script(
         'image-block-ext-js',
         get_stylesheet_directory_uri() . '/build/assets/js/image-block.ext.js',
         ['wp-blocks', 'wp-dom-ready', 'wp-edit-post'],
         filemtime(get_stylesheet_directory() . '/build/assets/js/image-block.ext.js')
      );
      wp_enqueue_style(
         'header-css',
         get_stylesheet_directory_uri() . '/build/assets/css/header.css',
         [],
         filemtime(get_stylesheet_directory() . '/build/assets/css/header.css')
      );
   }

   wp_enqueue_style(
      'group-block-ext-style',
      get_stylesheet_directory_uri() . '/build/assets/css/group-block.ext.css',
      [],
      filemtime(get_stylesheet_directory() . '/build/assets/css/group-block.ext.css')
   );
   if ($is_gutenberg_editor) {
      // EXTEND script
      wp_enqueue_script(
         'group-block-ext-js',
         get_stylesheet_directory_uri() . '/build/assets/js/group-block.ext.js',
         ['wp-blocks', 'wp-dom-ready', 'wp-edit-post'],
         filemtime(get_stylesheet_directory() . '/build/assets/js/group-block.ext.js')
      );
   }

   wp_enqueue_style(
      'column-block-ext-style',
      get_stylesheet_directory_uri() . '/build/assets/css/column-block.ext.css',
      [],
      filemtime(get_stylesheet_directory() . '/build/assets/css/column-block.ext.css')
   );
   if ($is_gutenberg_editor) {
      // EXTEND script
      wp_enqueue_script(
         'column-block-ext-js',
         get_stylesheet_directory_uri() . '/build/assets/js/column-block.ext.js',
         ['wp-blocks', 'wp-dom-ready', 'wp-edit-post'],
         filemtime(get_stylesheet_directory() . '/build/assets/js/column-block.ext.js')
      );
   }

   wp_enqueue_style(
      'columns-block-ext-style',
      get_stylesheet_directory_uri() . '/build/assets/css/columns-block.ext.css',
      [],
      filemtime(get_stylesheet_directory() . '/build/assets/css/columns-block.ext.css')
   );
   if ($is_gutenberg_editor) {
      // EXTEND script
      wp_enqueue_script(
         'columns-block-ext-js',
         get_stylesheet_directory_uri() . '/build/assets/js/columns-block.ext.js',
         ['wp-blocks', 'wp-dom-ready', 'wp-edit-post'],
         filemtime(get_stylesheet_directory() . '/build/assets/js/columns-block.ext.js')
      );
   }
}

/**
 * Wordpress Init action
 */
add_action('init', __NAMESPACE__ . '\out_theme_init');
function out_theme_init() {
   // Register custom blocks (A - Z)
   register_block_type(get_stylesheet_directory() . '/build/blocks/post-archive');
   register_block_type(get_stylesheet_directory() . '/build/blocks/scrollbar-slider');
   register_block_type(get_stylesheet_directory() . '/build/blocks/search');
   register_block_type(get_stylesheet_directory() . '/build/blocks/slider');
   register_block_type(get_stylesheet_directory() . '/build/blocks/slider-item');
}


add_action('init', __NAMESPACE__ . '\rename_default_post_type', 100);

function rename_default_post_type() {
   global $wp_post_types;

   if (isset($wp_post_types['post'])) {
      // Döpt om till Kundcase för OÛT
      $wp_post_types['post']->labels->name = 'Kundcase';
      $wp_post_types['post']->labels->singular_name = 'Kundcase';
      $wp_post_types['post']->labels->add_new = 'Lägg till nytt Kundcase';
      $wp_post_types['post']->labels->add_new_item = 'Lägg till nytt Kundcase';
      $wp_post_types['post']->labels->edit_item = 'Redigera Kundcase';
      $wp_post_types['post']->labels->new_item = 'Nytt Kundcase';
      $wp_post_types['post']->labels->view_item = 'Visa Kundcase';
      $wp_post_types['post']->labels->search_items = 'Sök Kundcase';
      $wp_post_types['post']->labels->not_found = 'Inga Kundcase hittades';
      $wp_post_types['post']->labels->not_found_in_trash = 'Inga Kundcase i papperskorgen';
      $wp_post_types['post']->labels->all_items = 'Alla Kundcase';
      $wp_post_types['post']->labels->menu_name = 'Kundcase';
      $wp_post_types['post']->labels->name_admin_bar = 'Kundcase';
   }
}

add_action('init', __NAMESPACE__ . '\remove_comment_support', 100);

function remove_comment_support() {
   remove_post_type_support('post', 'comments');
   remove_post_type_support('page', 'comments');
}
add_filter('comments_open',  '__return_false', 20, 2);
add_filter('pings_open', '__return_false', 20, 2);
add_action('admin_menu', __NAMESPACE__ . '\remove_comments_admin_menu');
function remove_comments_admin_menu() {
   remove_menu_page('edit-comments.php');
}
add_action('admin_bar_menu', __NAMESPACE__ . '\remove_comments_admin_bar', 999);
function remove_comments_admin_bar($wp_admin_bar) {
   $wp_admin_bar->remove_node('comments');
}

// Disable all core block patterns
remove_action('init', 'register_core_block_patterns');
remove_action('init', 'register_core_block_pattern_categories');

add_filter('render_block_core/post-terms', __NAMESPACE__ . '\render_block_core_term_description_callback', 10, 3);

function render_block_core_term_description_callback($block_content, $block, $instance) {
   $output = "";
   $stripped = array_filter(explode(",", strip_tags($block_content)));
   if (sizeof($stripped) > 0) :

      $output = '<div class="tags-wrapper">';
      sort($stripped);

      $total = count($stripped);
      $columns = 2;
      $per_column = $total / $columns;


      $output .= '<div class="column-1">';

      foreach ($stripped as $index => $tag) :

         if ($index === $per_column) :
            $output .= '</div>';
            $output .= '<div class="column-2">';
         endif;

         $output .= '<span style="display: block;">' . trim($tag) . '</span>';

      endforeach;

      $output .= '</div>';
      $output .= '</div>';

   else :
      $output = $block_content;
   endif;

   return $output;
}
