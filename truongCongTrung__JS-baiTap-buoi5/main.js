// Bài 1: Quản lý tuyển sinh

document.getElementById('btn__kq').onclick = function tuyenSinh() {
  //Đầu vào
  let diemChuan = +document.getElementById('diemChuan').value;
  let khuVuc = +document.getElementById('khuVuc').value;
  let doiTuong = +document.getElementById('doiTuong').value;

  let diem1 = +document.getElementById('diem1').value;
  let diem2 = +document.getElementById('diem2').value;
  let diem3 = +document.getElementById('diem3').value;

  //Xử lý
  if(diem1 == "" || diem2 == "" || diem3 == "" || diemChuan == "")
  {
    alert("Vui lòng nhập điểm đầy đủ");
    return;
  }

  let tongDiem = 0;
  let ketQua = "";

  if( khuVuc === 1){
    tongDiem += 2;
  }else if( khuVuc === 2){
    tongDiem += 1;
  }else if( khuVuc === 3){
    tongDiem += 0.5;
  }else {
    tongDiem += 0;
  }

  if( doiTuong === 1){
    tongDiem += 2.5;
  }else if( doiTuong === 2){
    tongDiem += 1.5;
  }else if( doiTuong === 3){
    tongDiem += 1;
  }else {
    tongDiem += 0;
  }
  
  tongDiem += diem1 + diem2 + diem3;

  if(diemChuan <= tongDiem){
    ketQua = "Bạn đã đậu. Tổng điểm: " + tongDiem;
  }
  else{
    ketQua = "Bạn đã rớt. Tổng điểm: " + tongDiem;
  }

  //đầu ra
  alert(ketQua);

}
// Bài 2: Tính tiền điện
//Đầu vào
document.getElementById('btnTienDien').onclick = function tienDien(){
  //Đầu vào
  let ten = document.getElementById('ten').value;
  let soKW = +document.getElementById('soKW').value;

  //xử lý
  let ketQua = "";
  let price = 0;
  if(soKW <=50){
    for(let i = 1 ; i<=soKW;i++){
      price = i * 500;
    }
  }
  else if(soKW <=100 )
  {
    
    for(let i = 1 ; i<=soKW-50 ;i++)
    {
      price = 25000+ (i * 650);
    }
  }
  else if(soKW <=200)
  {
    
    for(let i = 1 ; i<=soKW-100 ;i++)
    {
      price = 57500+ (i * 850);
    }
  }
  else if( soKW <=350 )
  {
    
    for(let i = 1 ; i<=soKW-200 ;i++)
    {
      price = 142500+ (i * 1100);
    }
  }
  else if( soKW >350 )
  {
    
    for(let i = 1 ; i<=soKW-350 ;i++)
    {
      price = 307500+ (i * 1300);
    }
  }
  ketQua = "Họ Tên: " + ten + ";" + "Tiền điện: " + price ;
  alert(ketQua);
}