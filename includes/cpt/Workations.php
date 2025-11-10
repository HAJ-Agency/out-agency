<?php

namespace INCLUDES\CPT;

class Workations {
  function __construct() {
    $this->register();
  }

  public function register() {
    /**
     * Post Type: Workations.
     */

    $labels = [
      "name" => esc_html__("Workations", "out"),
      "singular_name" => esc_html__("Workation", "out"),
      "menu_name" => esc_html__("Workations", "out"),
      "all_items" => esc_html__("Alla Workations", "out"),
      "add_new" => esc_html__("Lägg till ny", "out"),
      "add_new_item" => esc_html__("Lägg till ny Workation", "out"),
      "edit_item" => esc_html__("Redigera Workation", "out"),
      "new_item" => esc_html__("Ny Workation", "out"),
      "view_item" => esc_html__("Visa Workation", "out"),
      "view_items" => esc_html__("Visa Workations", "out"),
      "search_items" => esc_html__("Sök Workations", "out"),
      "not_found" => esc_html__("Inga Workations hittades", "out"),
      "not_found_in_trash" => esc_html__("Inga Workations i papperskorgen", "out"),
      "parent" => esc_html__("Överordnad Workation:", "out"),
      "featured_image" => esc_html__("Utvald bild för denna Workation", "out"),
      "set_featured_image" => esc_html__("Ange utvald bild för denna Workation", "out"),
      "remove_featured_image" => esc_html__("Ta bort utvald bild för denna Workation", "out"),
      "use_featured_image" => esc_html__("Använd som utvald bild för denna Workation", "out"),
      "archives" => esc_html__("Workation-arkiv", "out"),
      "insert_into_item" => esc_html__("Infoga i Workation", "out"),
      "uploaded_to_this_item" => esc_html__("Ladda upp till denna Workation", "out"),
      "filter_items_list" => esc_html__("Filtrera Workations-lista", "out"),
      "items_list_navigation" => esc_html__("Navigering för Workations-lista", "out"),
      "items_list" => esc_html__("Workations-lista", "out"),
      "attributes" => esc_html__("Workation-attribut", "out"),
      "name_admin_bar" => esc_html__("Workation", "out"),
      "item_published" => esc_html__("Workation publicerad", "out"),
      "item_published_privately" => esc_html__("Workation publicerad privat.", "out"),
      "item_reverted_to_draft" => esc_html__("Workation återställd till utkast.", "out"),
      "item_trashed" => esc_html__("Workation borttagen.", "out"),
      "item_scheduled" => esc_html__("Workation schemalagd", "out"),
      "item_updated" => esc_html__("Workation uppdaterad.", "out"),
      "template_name" => esc_html__("Enkel Workation: Workation", "out"),
      "parent_item_colon" => esc_html__("Överordnad Workation:", "out"),
    ];

    $args = [
      "label" => esc_html__("Workations", "out"),
      "labels" => $labels,
      "description" => "",
      "public" => true,
      "publicly_queryable" => true,
      "show_ui" => true,
      "show_in_rest" => true,
      "rest_base" => "",
      "rest_controller_class" => "WP_REST_Posts_Controller",
      "rest_namespace" => "wp/v2",
      "has_archive" => true,
      "show_in_menu" => true,
      "show_in_nav_menus" => true,
      "delete_with_user" => false,
      "exclude_from_search" => false,
      "capability_type" => "post",
      "map_meta_cap" => true,
      "hierarchical" => false,
      "can_export" => true,
      "rewrite" => ["slug" => "workout", "with_front" => true],
      "query_var" => true,
      "menu_icon" => "dashicons-heart",
      "supports" => ["title", "editor", "thumbnail", "excerpt", "custom-fields", "revisions", "author", "page-attributes", "post-formats"],
      "taxonomies" => ["category", "post_tag"],
      "show_in_graphql" => true,
    ];

    \register_post_type("workations", $args);
  }
}
