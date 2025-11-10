<?php

namespace INCLUDES\CPT;

class Services {
  function __construct() {
    $this->register();
  }

  public function register() {
    /**
     * Post Type: Services.
     */

    $labels = [
      "name" => esc_html__("Tjänster", "out"),
      "singular_name" => esc_html__("Tjänst", "out"),
      "menu_name" => esc_html__("Tjänster", "out"),
      "all_items" => esc_html__("Alla tjänster", "out"),
      "add_new" => esc_html__("Lägg till ny", "out"),
      "add_new_item" => esc_html__("Lägg till ny tjänst", "out"),
      "edit_item" => esc_html__("Redigera tjänst", "out"),
      "new_item" => esc_html__("Ny tjänst", "out"),
      "view_item" => esc_html__("Visa tjänst", "out"),
      "view_items" => esc_html__("Visa tjänster", "out"),
      "search_items" => esc_html__("Sök tjänster", "out"),
      "not_found" => esc_html__("Inga tjänster hittades", "out"),
      "not_found_in_trash" => esc_html__("Inga tjänster i papperskorgen", "out"),
      "parent" => esc_html__("Överordnad tjänst:", "out"),
      "featured_image" => esc_html__("Utvald bild för denna tjänst", "out"),
      "set_featured_image" => esc_html__("Ange utvald bild för denna tjänst", "out"),
      "remove_featured_image" => esc_html__("Ta bort utvald bild för denna tjänst", "out"),
      "use_featured_image" => esc_html__("Använd som utvald bild för denna tjänst", "out"),
      "archives" => esc_html__("Tjänstarkiv", "out"),
      "insert_into_item" => esc_html__("Infoga i tjänst", "out"),
      "uploaded_to_this_item" => esc_html__("Ladda upp till denna tjänst", "out"),
      "filter_items_list" => esc_html__("Filtrera tjänstelista", "out"),
      "items_list_navigation" => esc_html__("Navigering för tjänstelista", "out"),
      "items_list" => esc_html__("Tjänstelista", "out"),
      "attributes" => esc_html__("Tjänstattribut", "out"),
      "name_admin_bar" => esc_html__("Tjänst", "out"),
      "item_published" => esc_html__("Tjänst publicerad", "out"),
      "item_published_privately" => esc_html__("Tjänst publicerad privat.", "out"),
      "item_reverted_to_draft" => esc_html__("Tjänst återställd till utkast.", "out"),
      "item_trashed" => esc_html__("Tjänst borttagen.", "out"),
      "item_scheduled" => esc_html__("Tjänst schemalagd", "out"),
      "item_updated" => esc_html__("Tjänst uppdaterad.", "out"),
      "template_name" => esc_html__("Enkel tjänst: Tjänst", "out"),
      "parent_item_colon" => esc_html__("Överordnad tjänst:", "out"),
    ];

    $args = [
      "label" => esc_html__("Tjänster", "out"),
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
      "rewrite" => ["slug" => "tjanster", "with_front" => true],
      "query_var" => true,
      "menu_icon" => "dashicons-admin-tools",
      "supports" => ["title", "editor", "thumbnail", "excerpt", "custom-fields", "revisions", "author", "page-attributes", "post-formats"],
      "taxonomies" => ["category", "post_tag"],
      "show_in_graphql" => true,
    ];

    \register_post_type("services", $args);
  }
}
