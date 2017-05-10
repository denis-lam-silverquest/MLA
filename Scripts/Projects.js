var galleryData = {
    galleries: [
        {
            id: 1,
            title: "Wentworth Residence",
            description: "<p>" +
                            "This new home is located on the southern ridges of Sydney Harbour at the crest of a " +
                            "gully which feeds into Vaucluse Bay. The site is characterized by a series of rock " +
                            "shelves, palm trees and mature eucalypt." +
                            "</p>",
            thumbnail: "/Images/Gallery/Wentworth Residence/Thumbnails/945-001-360x269.png",
            galleryImages: [
                {
                    src: "/Images/Gallery/Wentworth Residence/Full/945-001-1200x898.png",
                    w: 1200,
                    h: 898,
                    title: "Living Room 1"
                },
                {
                    src: "/Images/Gallery/Wentworth Residence/Full/945-002-1200x554.png",
                    w: 1200,
                    h: 554,
                    title: "Living Room 2"
                },
                {
                    src: "/Images/Gallery/Wentworth Residence/Full/945-004-1200x898.png",
                    w: 1200,
                    h: 898,
                    title: "Kitchen"
                },
                {
                    src: "/Images/Gallery/Wentworth Residence/Full/945-006-1200x898.png",
                    w: 1200,
                    h: 898,
                    title: "Bathroom"
                },
                {
                    src: "/Images/Gallery/Wentworth Residence/Full/945-011-1200x877.png",
                    w: 1200,
                    h: 877,
                    title: "Stair Case"
                },
                {
                    src: "/Images/Gallery/Wentworth Residence/Full/945-012-898x1200.png",
                    w: 898,
                    h: 1200,
                    title: "Powder Room"
                },
                {
                    src: "/Images/Gallery/Wentworth Residence/Full/945-013-1200x898.png",
                    w: 1200,
                    h: 898,
                    title: "Wine Cellar"
                },
                {
                    src: "/Images/Gallery/Wentworth Residence/Full/945-019-1200x876.png",
                    w: 1200,
                    h: 876,
                    title: "Master Bedrooom Ensuite"
                },
                {
                    src: "/Images/Gallery/Wentworth Residence/Full/945-022-1200x552.png",
                    w: 1200,
                    h: 552,
                    title: "Master Bedrooom"
                }
            ]
        },
        {
            id: 2,
            title: "Darling Point Apartment",
            description: "<p>" +
                            "This apartment on the 2nd level of a prestigious Darling Point security tower commands " +
                            "glorious wraparound views featuring Sydney Harbour, the iconic Harbour Bridge, " +
                            "Opera House and boat filled Rushcutters Bay." +
                            "</p>",
            thumbnail: "/Images/Gallery/Darling Point Apartment/Thumbnails/1125-008-360x269.png",
            galleryImages: [
                {
                    src: "/Images/Gallery/Darling Point Apartment/Full/1125-001-1200x898.png",
                    w: 1200,
                    h: 898,
                    title: "Main Bathroom"
                },
                {
                    src: "/Images/Gallery/Darling Point Apartment/Full/1125-005-898x1200.png",
                    w: 898,
                    h: 1200,
                    title: "Sitting Room"
                },
                {
                    src: "/Images/Gallery/Darling Point Apartment/Full/1125-006-898x1200.png",
                    w: 898,
                    h: 1200,
                    title: "Hallway 1"
                },
                {
                    src: "/Images/Gallery/Darling Point Apartment/Full/1125-007-898x1200.png",
                    w: 898,
                    h: 1200,
                    title: "Hallway 2"
                },
                {
                    src: "/Images/Gallery/Darling Point Apartment/Full/1125-008-1200x898.png",
                    w: 1200,
                    h: 898,
                    title: "Dining Room"
                },
                {
                    src: "/Images/Gallery/Darling Point Apartment/Full/1125-010-1200x554.png",
                    w: 1200,
                    h: 554,
                    title: "Living Room"
                }
            ]
        },
        {
            id: 3,
            title: "Elizabeth Bay Penthouse",
            description: "<p>" +
                            "The Penthouse at Toft Monks is located in a unique and highly sought after area of the " +
                            "Sydney Harbour foreshore. With an uninterrupted northerly aspect as well as unique views " +
                            "to the east, west and south the Penthouse entertains the four basic elements of life: air, " +
                            "fire, water and earth." +
                            "</p>",
            thumbnail: "/Images/Gallery/Elizabeth Bay Penthouse/Thumbnails/141211_TM_Kitchen-360x227.png",
            galleryImages: [
                {
                    src: "/Images/Gallery/Elizabeth Bay Penthouse/Full/141211_TM_Kitchen-1200x756.png",
                    w: 1200,
                    h: 756,
                    title: "Kitchen"
                },
                {
                    src: "/Images/Gallery/Elizabeth Bay Penthouse/Full/141215_TM_Bathroom-1200x823.png",
                    w: 1200,
                    h: 823,
                    title: "Main Bathroom"
                },
                {
                    src: "/Images/Gallery/Elizabeth Bay Penthouse/Full/141215_TM_Bedroom-1200x800.png",
                    w: 1200,
                    h: 800,
                    title: "Main Bedroom"
                },
                {
                    src: "/Images/Gallery/Elizabeth Bay Penthouse/Full/141215_TM_Dining-1200x800.png",
                    w: 1200,
                    h: 800,
                    title: "Dining Room"
                },
                {
                    src: "/Images/Gallery/Elizabeth Bay Penthouse/Full/141215_TM_Living-1200x800.png",
                    w: 1200,
                    h: 800,
                    title: "Living Room"
                }
            ]
        }
    ]
};

$(document).ready(function () {
    var galleryCount = 1;
    var html = "";
    galleryData.galleries.map(function (gallery) {
        if (galleryCount % 2 == 1) {
            html += "<div class=\"row\">";
        }
        html += buildGallery(gallery);
        if (galleryCount % 2 == 0) {
            html += "</div>";
        }
        galleryCount++;
    });
    $(".panel-body").append(html);
});

function buildGallery(gallery) {
    var html =
        "<div class=\"col-sm-12 col-md-6 col-lg-6\">" +
        "   <div class=\"thumbnail\">" +
        "       <img src=\"" + gallery.thumbnail + "\"/>" +
        "       <div class=\"header\">" +
        "           <h4>" + gallery.title + "</h4>" +
        "       </div>" +
        "       <div class=\"buttons\">" +
        "           <button onclick=\"onclick_ViewGallery(" + gallery.id + ");\" class=\"btn btn-block btn-primary\" role=\"button\">View Gallery</button>" +
        "       </div>" +
        "   </div>" +
        "</div>";
    return html;
}

function getDescription(text) {
    const WORD_LIMIT = 25; // TODO: Make the number of words configurable

    var allWords = text.split(" ");
    var returnValue = text;

    if (allWords.length > (WORD_LIMIT - 1)) {
        var limitedWords = allWords.slice(0, WORD_LIMIT - 1);
        var remainingWords = allWords.slice(WORD_LIMIT - 1, allWords.length);

        returnValue = limitedWords.join(" ") + "... <a href=\"#\" class=\"btn btn-link btn-xs\">View More</a>";
    }

    return returnValue;
}

function onclick_ViewGallery(id) {
    var pswpElement = $(".pswp")[0];

    // Build items array
    var gallery = galleryData.galleries.filter(function (gallery) {
        return (gallery.id == id) ? gallery : undefined;
    });

    var galleryTitle = gallery[0].title;

    var items = (gallery.length > 0) ? gallery[0].galleryImages : [];

    // Define options (if needed)
    var options = {
        index: 0, // start at first slide
        bgOpacity: 0.8,
        addCaptionHTMLFn: function (item, captionEl, isFake) {
            // item      - slide object
            // captionEl - caption DOM element
            // isFake    - true when content is added to fake caption container
            //             (used to get size of next or previous caption)

            if (!item.title) {
                $(captionEl).children(0).html("");
                return false;
            }

            $(captionEl).children(0).html(galleryTitle + " - " + item.title);
            return true;
        }
    };

    // Initializes and opens PhotoSwipe
    var gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, items, options);
    gallery.init();
}