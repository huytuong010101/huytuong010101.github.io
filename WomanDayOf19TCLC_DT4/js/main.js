a = [
    [
        "Trần Nguyễn Anh Trình",
        "Moto's my life",
        "Chúc các bạn nữ một ngày 8 - 3 thật vui vẻ, hạnh phúc bên gia đình, người thân, và bạn bè.",
        "https://scontent-hkt1-1.xx.fbcdn.net/v/t1.0-9/s960x960/87270282_2497309257176183_1403189132980649984_o.jpg?_nc_cat=100&_nc_sid=85a577&_nc_ohc=S1k8Uy_2QCUAX-tlLK5&_nc_ht=scontent-hkt1-1.xx&_nc_tp=7&oh=0396c5332eb86a43680f2e32252e0c24&oe=5E919806"
    ],
    [
        "Trần Anh Dũng",
        "Ai cũng biết ",
        "Chúc bạn nhận được nhiều quà, nhiều hoa, nhiều lời khen, lời chúc của phái nam trong ngày hôm nay. Chúc bạn gặp nhiều may mắn hơn, hạnh phúc hơn nhiều niềm vui, nhiều điều tuyệt diệu hơn, đặc biệt thành công trong cuộc sống .",
        "https://scontent-xsp1-1.xx.fbcdn.net/v/t1.0-1/87052114_626639097911138_5353128438938992640_n.jpg?_nc_cat=110&_nc_sid=dbb9e7&_nc_ohc=IajAfruK4hkAX_MhDqS&_nc_ht=scontent-xsp1-1.xx&oh=c005f983a75150171a7777a8ad9e7df1&oe=5E92E299"
    ],
    [
        "Lê Thanh Quý",
        "😃",
        "Chúc mấy thím ngày 8/3 vui vẻ,hạnh phúc, xinh đẹp.",
        "https://scontent-hkt1-1.xx.fbcdn.net/v/t1.0-1/37686983_446549915861863_4438860953957695488_n.jpg?_nc_cat=100&_nc_sid=dbb9e7&_nc_ohc=wNIHs5S2bDoAX9pkKsP&_nc_ht=scontent-hkt1-1.xx&oh=4cded1109e21992ab1f706d83aa64d6c&oe=5E9A4268"
    ],
    [
        "Hoàng Huy",
        "🙃",
        "Chúc chị em sống khoẻ qua mùa dịch nhá ❤️",
        "https://scontent-hkt1-1.xx.fbcdn.net/v/t1.0-9/74471677_2165970703705954_583642191025405952_n.jpg?_nc_cat=102&_nc_sid=85a577&_nc_ohc=gh_yrifZru4AX_Bqrnz&_nc_ht=scontent-hkt1-1.xx&oh=288f829f00e1507130982cae645ac52c&oe=5E983552"
    ],
    [
        "Nguyễn Huy Tưởng",
        "...",
        "Chúc mấy bạn nữ trốn dịch vui vẻ :)))))",
        "https://scontent-xsp1-1.xx.fbcdn.net/v/t31.0-8/p960x960/27993265_1352554394889960_8886188508490465166_o.jpg?_nc_cat=108&_nc_sid=7aed08&_nc_ohc=dgXjx8ouOwMAX-8fi9b&_nc_ht=scontent-xsp1-1.xx&_nc_tp=6&oh=26a0f66b65c921c9b62d1f3501e95adb&oe=5E964AA7"
    ],
    ["Dương Trường Vũ", 
    "Đẹp trai, con nhà giàu, học giỏi... là những tố chất mình hoàn toàn không có :v... Tuy nhiên thì mình được cái là ngoài ăn ở dơ thì còn sủa bẩn", 
    "Cũng đến 8-3 rồi, chúc vợ 2, vợ 3, vợ 4, vợ 5, vợ 6, vợ 7, vợ 8 của mìnnnnnn ngày càng xinh đẹp, sẽ có nhiều thành công trong học vấn và các con đường riêng của mỗi vợ :v do covid19 mà chúng mình không thể bên nhau như các năm trước, nhưng các vợ đừng buồn... Sau này mình sẽ dùng tấm thân nhỏ bé này bù đắp lại cho các vợ những cô đơn mà các vợ đã chịu trong thời gian qua... Tuy mình trong này có hơi chút ho và sốt nhẹ nhưng chắc không có sao đâu, các vợ không cần phải lo... Mình sẽ gặp lại nhau sớm thôi.Yêu vợ es",
    "https://scontent.fdad3-1.fna.fbcdn.net/v/t1.0-1/c0.0.736.736a/86390666_225101068650621_6854535085908033536_n.jpg?_nc_cat=102&_nc_sid=dbb9e7&_nc_ohc=rlIEWh7Y7acAX_lgAPO&_nc_ht=scontent.fdad3-1.fna&oh=b5cca7889ceec2b696b91759e2b3f74d&oe=5E98FEC8"
    ]
    
]

function makeCard(name, des, wishes, img) {
    return (
        '<div class="col-xs-12 col-sm-6 col-md-4">'
        + '<div class="image-flip" ontouchstart="this.classList.toggle(\'hover\');">'
        + ' <div class="mainflip">'
        + '<div class="frontside">'
        + ' <div class="card">'
        + '<div class="card-body text-center">'
        + '<p><img class=" img-fluid"'
        + 'src="' + img + '"'
        + 'alt="card image"></p>'
        + '<h4 class="card-title">' + name + '</h4>'
        + '<p class="card-text">' + des + ' </p>'
        + ' </div>'
        + '  </div>'
        + '</div>'
        + ' <div class="backside">'
        + ' <div class="card">'
        + '<div class="card-body text-center mt-4">'
        + '<h4 class="card-title">' + name + '</h4>'
        + '<p class="card-text">'
        + wishes
        + '</p>'
        + '</div>'
        + ' </div>'
        + '</div>'
        + '</div>'
        + '</div>'
        + '</div>'
    )
}