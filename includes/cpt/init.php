<?php
namespace INCLUDES\CPT;

add_action('init', function() {
  // Register CPT Archives 
  $services = new Services();
  $Workations = new Workations();
});