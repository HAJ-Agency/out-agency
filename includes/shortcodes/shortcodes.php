<?php

namespace Out\Includes\Shortcodes;

add_shortcode("out_case_overlay", __NAMESPACE__ . "\out_case_overlay_callback");

function out_case_overlay_callback() {
    ob_start();
    $caseID = get_the_ID();
    $title = get_the_title($caseID);
    $logo = get_field('overlay_logo', $caseID);
    $text = get_field('overlay_text', $caseID);
    $columns = get_field('columns', $caseID);
    $columnOne = $columns['column_1'] ?? false;
    $columnTwo = $columns['column_2'] ?? false;
    $columnThree = $columns['column_3'] ?? false;
    $hasColumns = $columnOne && $columnTwo && $columnThree;
?>
    <div class="out-case-overlay">
        <img src="<?= $logo ?>" alt="<?= $title ?> Logo" height="50" width="auto" />
        <div class="out-case-overlay-text">
            <?= $text ?>
        </div>
        <?php if ($hasColumns) : ?>
            <img class="out-case-overlay-divider" width="624" height="4" src="/wp-content/uploads/2025/09/contact-us-divider.svg" alt="divider" />
            <div class="out-case-overlay-columns">
                <div class="out-case-overlay-column"><?= $columns['column_1']; ?></div>
                <div class="out-case-overlay-column"><?= $columns['column_2']; ?></div>
                <div class="out-case-overlay-column"><?= $columns['column_3']; ?></div>
            </div>
        <?php endif; ?>
    </div>
<?php
    return ob_get_clean();
}

add_shortcode('get_first_category_name', __NAMESPACE__ . '\get_first_category_name_callback');

function get_first_category_name_callback() {
    ob_start();
    $caseID = \get_the_ID();
    $categories = get_the_terms($caseID, 'category');
    if ((count($categories) > 0) && $categories[0]->name != "Uncategorised") :
        echo '<span class="out-case-overlay-category-term">' . $categories[0]->name . '</span>';
    endif;
    return ob_get_clean();
}

add_shortcode('pinned_case_overlay', __NAMESPACE__ . '\pinned_case_overlay_callback');

function pinned_case_overlay_callback() {
    ob_start();
    $caseID = get_the_ID();
    $title = get_the_title($caseID);
    $logo = get_field('overlay_logo', $caseID);
    $text = get_field('overlay_text', $caseID);
    $columns = get_field('columns', $caseID);
    $columnOne = $columns['column_1'] ?? false;
    $columnTwo = $columns['column_2'] ?? false;
    $columnThree = $columns['column_3'] ?? false;
    $hasColumns = $columnOne && $columnTwo && $columnThree;
?>
    <figure class="wp-block-image aligncenter size-full style-svg"
        style="margin-top:var(--wp--preset--spacing--1);margin-right:var(--wp--preset--spacing--1);margin-bottom:
    var(--wp--preset--spacing--1);margin-left:var(--wp--preset--spacing--1)">
        <img decoding="async" width="auto" height="81" src="<?= $logo ?>" alt="" class="wp-image-1685">
    </figure>
    <p class="has-text-align-center" style="margin-top:0;margin-bottom:0;padding-right:var(--wp--preset--spacing--4-25);
    padding-left:var(--wp--preset--spacing--4-25)"><?= strip_tags($text) ?></p>
    <figure class="wp-block-image aligncenter size-large is-resized" style="margin-top:0;margin-bottom:0"><img decoding="async" width="624" height="4" src="http://out.local/wp-content/uploads/2025/09/contact-us-divider.svg" alt="" class="wp-image-388" style="width:576px"></figure>
    <div class="wp-block-columns are-vertically-aligned-top is-layout-flex wp-container-core-columns-is-layout-54ff4114 wp-block-columns-is-layout-flex" style="padding-right:var(--wp--preset--spacing--1);padding-left:var(--wp--preset--spacing--1)">
        <div class="wp-block-column is-vertically-aligned-top is-layout-flow wp-block-column-is-layout-flow">
            <?= $columnOne ?>            
        </div>
        <div class="wp-block-column is-vertically-aligned-top is-layout-flow wp-block-column-is-layout-flow">
            <?= $columnTwo ?>
        </div>
        <div class="wp-block-column is-vertically-aligned-top is-layout-flow wp-block-column-is-layout-flow">
            <?= $columnThree ?>
        </div>
    </div>
<?php
    return ob_get_clean();
}
