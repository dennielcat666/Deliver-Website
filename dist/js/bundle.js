"use strict";

$(function () {
  var $searchTxt = $('.search_text');
  var $searchBtn = $('.search_button');
  console.log('$searchTxt', $searchTxt);
  console.log('$searchBtn', $searchBtn);
  $searchBtn.on('click', function (e) {
    e.preventDefault();
    $searchTxt.removeClass('hidden');
    $searchBtn.on('click', function (e) {
      e.preventDefault();
      var $inputTxt = $searchTxt.val();
      console.log('$inputTxt', $inputTxt);
    });
    $searchBtn.dblclick(function () {
      $searchTxt.val('');
      $searchTxt.addClass('hidden');
    });
  });
  var $tabsLinksTitle = $('.tabs_link_title');
  var $tabsBlocksContent = $('.tabs_blocks_content');
  $tabsLinksTitle.each(function (index) {
    $(this).on('click', function (e) {
      e.preventDefault();
      $tabsBlocksContent.hide();
      $tabsLinksTitle.removeClass('tabs_link--active');
      $(this).addClass('tabs_link--active');
      $tabsBlocksContent.each(function (indexContent) {
        console.log({
          item: $(this),
          indexContent: indexContent
        });

        if (index === indexContent) {
          $(this).show();
        }
      });
    });
  });
  var $accordionPanel = $('.accordion_caption');
  console.log($accordionPanel);
  $accordionPanel.on('click', function () {
    $(this).toggleClass('accordion_caption--active');
  });
});