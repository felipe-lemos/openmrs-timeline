<?php
// This file is generated. Do not modify it manually.
return array(
	'openmrs-timeline' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'openmrs/timeline',
		'version' => '1.0.0',
		'title' => 'Timeline',
		'category' => 'design',
		'icon' => 'clock',
		'description' => 'Display a timeline of key events',
		'supports' => array(
			'html' => false,
			'align' => array(
				'wide',
				'full'
			)
		),
		'attributes' => array(
			'title' => array(
				'type' => 'string',
				'default' => 'Our history'
			),
			'heading' => array(
				'type' => 'string',
				'default' => 'We are crafting a shared vision for digital health'
			),
			'description' => array(
				'type' => 'string',
				'default' => 'Our community was founded in 2012 and has rapidly evolved into an essential component of digital health infrastructure around the world.'
			),
			'linkText' => array(
				'type' => 'string',
				'default' => 'Read our story'
			),
			'linkUrl' => array(
				'type' => 'string',
				'default' => '#'
			),
			'timelineItems' => array(
				'type' => 'array',
				'default' => array(
					array(
						'date' => '2012',
						'description' => 'OpenMRS community founded',
						'imageUrl' => '',
						'id' => 'item1'
					),
					array(
						'date' => '2015',
						'description' => 'First major implementation milestone',
						'imageUrl' => '',
						'id' => 'item2'
					),
					array(
						'date' => '2018',
						'description' => 'Global expansion to 50+ countries',
						'imageUrl' => '',
						'id' => 'item3'
					)
				)
			)
		),
		'textdomain' => 'openmrs',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./editor.scss',
		'style' => 'file:./style.scss'
	)
);
