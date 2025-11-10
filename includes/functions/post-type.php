<?php

namespace Out\Includes\Functions;

function get_post_type_content($args) {
    $post_type = $args['post_type'] ?? 'post';
    $offset = intval($args['offset'] ?? 0);
    $posts_per_page = intval($args['posts_per_page'] ?? 8);
    $category_slug = $args['category_slug'] ?? '';
    $query_args = [
        'post_type' => $post_type,
        'posts_per_page' => $posts_per_page,
        'offset' => $offset,
        'orderby' => 'date title',
        'order' => 'DESC',
    ];
    if (!empty($category_slug)) {
        $query_args['tax_query'] = [
            [
                'taxonomy' => 'category',
                'field' => 'slug',
                'terms' => $category_slug,
            ],
        ];
    }
    $query = new \WP_Query($query_args);
    $posts = $query->posts;
    $found_posts = $query->found_posts;
    $response = [];
    foreach ($posts as $post) {
        $response[] = [
            'id' => $post->ID,
            'title' => $post->post_title,
            'link' => get_permalink($post),
            'excerpt' => $post->post_excerpt,
            'image' => get_post_thumbnail_id($post->ID)
                ? wp_get_attachment_image(get_post_thumbnail_id($post->ID), 'full')
                : '<svg>...</svg>',
        ];
    }
    return [
        'posts' => $response,
        'found_posts' => $found_posts,
        'has_more' => $offset < $found_posts,
        'wp_query' => $query, // optionally include the WP_Query object
    ];
}


function get_product_data($args) {
    $total_posts = $args['numberOfProducts'] ?? 6;
    $product_category = $args['productCategory'] ?? '';
    $product_atmosphere = $args['productAtmosphere'] ?? '';
    $product_need = $args['productNeed'] ?? '';
    $offset = intval($args['offset'] ?? 0);
    $query_args = [
        'post_type' => 'product',
        'posts_per_page' => $total_posts,
    ];

    if (!empty($product_category)) {
        $query_args['tax_query'][] = [
            'taxonomy' => 'product_cat',
            'field' => 'slug',
            'terms' => $product_category,
        ];
    }
    if (!empty($product_atmosphere)) {
        $query_args['tax_query'][] = [
            'taxonomy' => 'atmospheres',
            'field' => 'slug',
            'terms' => $product_atmosphere,
        ];
    }
    if (!empty($product_need)) {
        $query_args['tax_query'][] = [
            'taxonomy' => 'needs',
            'field' => 'slug',
            'terms' => $product_need,
        ];
    }
    if ($offset) {
        $query_args['offset'] = $offset;
    }
    return new \WP_Query($query_args);
}
