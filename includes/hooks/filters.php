<?php

namespace Out\Includes\Hooks;

/* Remove "Protected: " before title on password protected posts */

add_filter('protected_title_format', __NAMESPACE__ . '\remove_protected_text');
function remove_protected_text() {
	return '%s';
}

/*
Plugin Name: Fix shortcode
Plugin URI:
Description: Restore shortcode support on block templates
Author: Anderson Martins
Version: 0.1.0
*/

add_filter('render_block_data', function ($parsed_block) {
	if (isset($parsed_block['innerContent'])) {
		foreach ($parsed_block['innerContent'] as &$innerContent) {
			if (empty($innerContent)) {
				continue;
			}

			$innerContent = do_shortcode($innerContent);
		}
	}

	if (isset($parsed_block['innerBlocks'])) {
		foreach ($parsed_block['innerBlocks'] as $key => &$innerBlock) {
			if (!empty($innerBlock['innerContent'])) {
				foreach ($innerBlock['innerContent'] as &$innerContent) {
					if (empty($innerContent)) {
						continue;
					}

					$innerContent = do_shortcode($innerContent);
				}
			}
		}
	}

	return $parsed_block;
}, 10, 1);

// Add async or defer attributes
add_filter('script_loader_tag', function ($tag, $handle) {
	$defer_scripts = ['global-js', 'jquery', 'footer-js', 'datatables-script'];
	if (in_array($handle, $defer_scripts)) {
		return str_replace(' src', ' async src', $tag); // Replace "async" with "defer" if needed
	}
	return $tag;
}, 10, 2);
add_filter('style_loader_tag', function ($tag, $handle) {
	$defer_styles = ['global-css', 'header-css', 'footer-css', 'datatables-style'];
	if (in_array($handle, $defer_styles)) {
		return str_replace('rel="stylesheet"', 'rel="preload" as="style" onload="this.rel=\'stylesheet\'"', $tag);
	}
	return $tag;
}, 10, 2);

add_filter('render_block', __NAMESPACE__ . '\modify_button_block_structure', 10, 2);
function modify_button_block_structure($block_content, $block) {

	if ($block['blockName'] === 'core/button') {
		if (isset($block['attrs']['className']) && strpos($block['attrs']['className'], 'is-style-menu-btn') !== false) {
			$block_content = '<button class="wp-block-button ' . $block['attrs']['className'] . '"><div class="wp-block-button__link"><hr class="line-1"><hr class="line-2"></div></button>';
		}
	}
	return $block_content;
}

add_filter('render_block', __NAMESPACE__ . '\group_block_link_ext', 10, 2);
function group_block_link_ext($block_content, $block) {
	// Wrap the block content with a custom link
	if (isset($block['attrs']['groupLink']) && $block['attrs']['groupLink']) {
		$link = $block['attrs']['groupLink'];
		$site_url = get_site_url();
		$is_external = false;

		// External absolute URL (not our domain)
		if (preg_match('/^https?:\/\//i', $link)) {
			if (strpos($link, $site_url) !== 0) {
				$is_external = true;
			} else {
				// Internal absolute URL (our domain)
				$link = apply_filters('wpml_permalink', $link, apply_filters('wpml_current_language', null));
			}
		} elseif (strpos($link, '/') === 0) {
			// Internal relative URL
			// Try to resolve to a post/page and get translated permalink if possible
			$path = ltrim($link, '/');
			$post_types = get_post_types(['public' => true], 'names');
			$found = false;
			foreach ($post_types as $post_type) {
				$post = get_page_by_path($path, OBJECT, $post_type);
				if ($post) {
					$lang = apply_filters('wpml_current_language', null);
					$translated_id = apply_filters('wpml_object_id', $post->ID, $post_type, true, $lang);
					if ($translated_id && $translated_id != $post->ID) {
						$link = get_permalink($translated_id);
					} else {
						$link = '/' . $path;
					}
					$found = true;
					break;
				}
			}
			// If not found, leave as is
		}
		// else: not a URL, leave as is

		$target = isset($block['attrs']['groupLinkOpenNewTab']) && $block['attrs']['groupLinkOpenNewTab'] ? ' target="_blank" rel="noopener noreferrer"' : '';
		// Replace <a> tags with <span>, keeping all attributes except href
		$block_content = preg_replace_callback('/<a\b([^>]*)>(.*?)<\/a>/is', function ($matches) {
			// Remove href attribute from attributes string
			$attrs = preg_replace('/\s*href\s*=\s*([\'"]).*?\1/i', '', $matches[1]);
			return '<span' . $attrs . '>' . $matches[2] . '</span>';
		}, $block_content);
		$block_content = '<a href="' . esc_url($link) . '" class="no-style"' . $target . '>' . $block_content . '</a>';
	}
	return $block_content;
}

add_filter('render_block', __NAMESPACE__ . '\columns_block_fix_column_divider_position', 10, 2);
function columns_block_fix_column_divider_position($block_content, $block) {
	if ($block['blockName'] === 'core/columns' && !empty($block['attrs']['hasColumnDivider'])) {
		// Try to extract the spacing token from blockGap
		$spacingSlug = '8'; // fallback
		$gapValue = $block['attrs']['style']['spacing']['blockGap']['left'] ?? '';

		if (preg_match('/var:preset\|spacing\|([a-zA-Z0-9-]+)/', $gapValue, $match)) {
			$spacingSlug = $match[1];
		}

		$spacingVar = "--wp--preset--spacing--{$spacingSlug}";
		$cssVar = "--wp--columns-horizontal-gap: var({$spacingVar});";

		// Append to existing style or add a new one
		$block_content = preg_replace_callback(
			'/<([^>]+class="[^"]*wp-container-[^"]+[^"]*")([^>]*)>/',
			function ($matches) use ($cssVar) {
				$tagStart = $matches[0];
				if (preg_match('/style="([^"]*)"/', $tagStart, $styleMatch)) {
					$existingStyle = rtrim($styleMatch[1]);
					$newStyle = $existingStyle . '; ' . $cssVar;
					return preg_replace(
						'/style="[^"]*"/',
						'style="' . esc_attr($newStyle) . '"',
						$tagStart
					);
				} else {
					return str_replace($matches[1], $matches[1] . ' style="' . esc_attr($cssVar) . '"', $tagStart);
				}
			},
			$block_content
		);
	}
	return $block_content;
}


// Custom gutenberg block categories
add_filter('block_categories_all', __NAMESPACE__ . '\tiburon_block_category');
function tiburon_block_category($categories) {
	return array_merge(
		$categories,
		array(
			array(
				'slug'  => 'tiburon',
				'title' => __('Tiburon', 'tiburon'),
				'icon'  => null,
			),
		)
	);
}
add_filter('block_type_metadata', __NAMESPACE__ . '\filter_post_excerpt_attrs', 10);
// Allows <tags> in excerpts 
function filter_post_excerpt_attrs($metadata) {
  if ('core/post-excerpt' === $metadata['name']) {
    unset($metadata['attributes']['excerptLength']);
  }

  return $metadata;
};
