var listItemCard = [
    {
        id : 1,
        image : "../ADACHI,LTD/images/Group sp-1.png",
        cardtiltle : "Thực phẩm bảo vê sức khỏe SPECIAL KID VITAPROLIS",
        category :"Bổ sung dưỡng chất cần thiết, có ích cho thị giác,giúp tăng cường thị lực cho mắt,hỗ trợ phòng ngừa cận thị, mỏi mắt,khô mắt.Sản phẩm sử dụng cho các trẻ bị cận, trẻ có thị lực kém, hay mỏi mắt, khô mắt do thiếu dưỡng chất.",
        price : "250 000",
        limit: 100,
    },
    {
        id : 2,
        image : "../ADACHI,LTD/images/Group sp1-2.png",
        cardtiltle : "Thực phẩm bảo vê sức khỏe SPECIAL KID VITAPROLIS",
        category: "Giúp hỗ trợ miễn dịch,giúp tăng sức đề kháng của cư thể, giúp giảm triệu chứng của các bệnh vào mùa lạnh như cảm cúm, viêm đường hô hấp,...Sản phẩm sử dụng cho các trẻ có sức đề kháng kém,trẻ dễ mắc bệnh đường hô hấp trên như cmar lạnh ,cảm cúm,viêm họng , viêm phế quản.",
        price : "250 000",
        limit: 100,
    },
]

function setItemCard(arr){
    $("#list-card").html('');
    for (var i = 0; i < arr.length ; i++){
        renderItemCard(arr[i]);
    }
}
function renderItemCard(obj){
     
    var item = `<div class="layout">
                    <div class="sp2" id="card-${obj.id}" data-id="${obj.id}">
                        <img src="${obj.image}" alt="sp-2">
                    </div>
                    <div class="card-body" style="margin-left: 30px;
                    line-height: 50px;">
                        <h3 class="card-title">${obj.cardtiltle}</h3>
                        <p class="card-text">${obj.category}</p>
                        
                        <div class="giathanh">
                            <div>
                                 Giá thành sản phẩm:${obj.price} <span>VND</span>
                            </div>
                            <input type="number" id="qlty-${obj.id}">
                        </div>
                    </div>
                </div> `;
    $("#list-card").append(item);
}
$(document).ready(function(){
    setItemCard(listItemCard);
})
var result = 0;
function getQlty(){
  for(var j = 0; j < listItemCard.length ; j++){
    var number = $("#qlty-"+ listItemCard[j].id).val();
    if(number > listItemCard[j].limit){
        alert(listItemCard[j].name + "chỉ còn" + listItemCard[j].limit + "sản phẩm");
    }else{
        var payItem = total(0,listItemCard[j].price, number);
        result = result + payItem;
    }
  }
  $("#total-price").text(result);
  result = 0;
}
function total(id,price,qlty){
    var sum = price * qlty;
    return parseInt(sum);
}
