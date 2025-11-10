<?php

namespace Out\Includes\Api;

use function Out\Includes\Functions\get_post_type_content;

add_action('rest_api_init',  __NAMESPACE__ . '\hapi_search_page_endpoint');
function hapi_search_page_endpoint() {
    register_rest_route('hapi/v1', '/search-page/', array(
        'methods'  => 'GET',
        'callback' => __NAMESPACE__ . '\hapi_search_page',
        'permission_callback' => '__return_true',
    ));
}

function hapi_search_page($request) {
    $search_value = $request->get_param('search_value');
    $offset = intval($request->get_param('offset')) ?: 0;
    $posts_per_page = intval($request->get_param('posts_per_page')) ?: 8;
    // TODO Include products and other post types. Don't include resellers
    $args = array(
        's' => $search_value,
        'post_type' => 'page',
        'posts_per_page' => $posts_per_page,
        'relevanssi' => true,
        'offset' =>  $offset,
    );
    $query = new \WP_Query($args);
    $posts = $query->posts;
    $found_posts = $query->found_posts;
    $response = array();
    foreach ($posts as $post) {
        $response[] = array(
            'id' => $post->ID,
            'title' => $post->post_title,
            'link' => get_permalink($post),
            'excerpt' => $post->post_excerpt,
            'image' => wp_get_attachment_image(get_post_thumbnail_id($post->ID), 'full') ? wp_get_attachment_image(get_post_thumbnail_id($post->ID), 'full') : '<svg width="400" height="300" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_346_2327)"><mask id="mask0_346_2327" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="400" height="300"><path d="M400 0H0V300H400V0Z" fill="white"/></mask><g mask="url(#mask0_346_2327)"><path d="M400 0H0V300H400V0Z" fill="#EFF1F3"/><path fill-rule="evenodd" clip-rule="evenodd" d="M134.583 97.2664C134.608 93.6806 137.506 90.7785 141.091 90.75H259.284C262.879 90.75 265.792 93.6701 265.792 97.2664V202.359C265.767 205.944 262.869 208.847 259.284 208.875H141.091C137.496 208.872 134.583 205.955 134.583 202.359V97.2664ZM252.672 103.875H147.705V195.75L208.664 134.758C211.226 132.197 215.379 132.197 217.941 134.758L252.672 169.566V103.875ZM160.824 130.125C160.824 137.373 166.698 143.25 173.945 143.25C181.191 143.25 187.066 137.373 187.066 130.125C187.066 122.876 181.191 117 173.945 117C166.698 117 160.824 122.876 160.824 130.125Z" fill="#687787"/></g></g><defs><clipPath id="clip0_346_2327"><rect width="400" height="300" fill="white"/></clipPath></defs></svg>',
        );
    }
    return rest_ensure_response(array(
        'posts' => $response,
        'found_posts' => $found_posts,
        'has_more' => $offset < $found_posts,
    ));
}

add_action('rest_api_init',  __NAMESPACE__ . '\hapi_get_post_type_content_endpoint');
function hapi_get_post_type_content_endpoint() {
    register_rest_route('hapi/v1', '/get-post-type-content/', array(
        'methods'  => 'GET',
        'callback' => __NAMESPACE__ . '\hapi_get_post_type_content',
        'permission_callback' => '__return_true',
    ));
}

function hapi_get_post_type_content($request) {
    $args = [
        'post_type' => $request->get_param('post_type'),
        'posts_per_page' => intval($request->get_param('posts_per_page')) ?: 8,
        'offset' => intval($request->get_param('offset')) ?: 0,
        'category_slug' => $request->get_param('category_slug') ?: '',
    ];
    return rest_ensure_response(get_post_type_content($args));
}

