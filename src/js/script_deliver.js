$(function (){

    var $tabsLinksTitle = $('.tabs_link_title');
    var $tabsBlocksContent = $('.tabs_blocks_content');
    console.log('$tabsBlocksContent', $tabsBlocksContent);
    console.log('$tabsLinksTitle', $tabsLinksTitle);
    
    

    $tabsLinksTitle.each(function(index) {
        $(this).on('click', function(e) {
            e.preventDefault();
            $tabsBlocksContent.hide();
            $tabsLinksTitle.removeClass('tabs_link--active');
            $(this).addClass('tabs_link--active');
            $tabsBlocksContent.each(function (indexContent) {
                console.log({item:  $(this), indexContent});
                
                if (index === indexContent) {
                    $(this).show();
                }
            })
            // $tabsLinksTitle.each(function (indexTitle) {
            //     if (index === indexTitle) {
            //         $(this).addClass('tabs_link--active');
            //     }
            // })
        })
    })


    const $accordionPanel = $('.accordion_caption');
    console.log($accordionPanel);
    

    $accordionPanel.on('click', function(){
        $(this).toggleClass('accordion_caption--active');
    })


})