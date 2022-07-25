// Bài 1: Tính Thuế Thu nhập cá nhân
document.getElementById('btnTinh').onclick = function thueThuNhap(){
  //Đầu vào: 
  let hoTen = document.getElementById('hoTen').value;
  let tongThuNhap = +document.getElementById('tongThuNhap').value;
  let nguoiPhuThuoc = document.getElementById('nguoiPhuThuoc').value;

  //xử lý:  
  let thuNhapThue = tongThuNhap - 4000000 - nguoiPhuThuoc * 1600000;
  let ketQua = 0;
  let xuatKQ = "";
  let curentFormat = new Intl.NumberFormat("vn-VN");

  if(thuNhapThue <= 60e+6 )
  {
    ketQua = curentFormat.format(thuNhapThue * 0.05)
  }
  else if(thuNhapThue > 60e+6 || thuNhapThue <= 120e+6)
  {
    ketQua = curentFormat.format(thuNhapThue * 0.1)
  }
  else if(thuNhapThue > 120e+6 || thuNhapThue <= 210e+6)
  {
    ketQua = curentFormat.format(thuNhapThue * 0.15)
  }
  else if(thuNhapThue > 210e+6 || thuNhapThue <= 384e+6)
  {
    ketQua = curentFormat.format(thuNhapThue * 0.2)
  }
  else if(thuNhapThue > 384e+6 || thuNhapThue <= 624e+6)
  {
    ketQua = curentFormat.format(thuNhapThue * 0.25)
  }
  else if(thuNhapThue > 624e+6 || thuNhapThue <= 960e+6)
  {
    ketQua = curentFormat.format(thuNhapThue * 0.3)
  }
  else if(thuNhapThue > 960e+6)
  {
    ketQua = curentFormat.format(thuNhapThue * 0.35)
  }
  xuatKQ = "Họ Tên: "+ hoTen + ";\n" + "Tiền Thuế thu nhập cá nhân: " + ketQua + "VND";
  alert(xuatKQ);
}

// Bài 2: Tính tiền cáp

document.getElementById('khachHang').onchange = function(){
  if(this.value ==='2'){
  document.getElementById('soKetNoi').style.display = 'block';
} else {
document.getElementById('soKetNoi').style.display = 'none';
}
}

  document.getElementById('btnTinhCap') .onclick = function tinhTienCap(){
    // Đầu vào 
    let khachHang = document.getElementById('khachHang').value;
    let maKH = document.getElementById('maKH').value;
    let soKenhCC = +document.getElementById('soKenhCC').value;
    let soKetNoi = +document.getElementById('soKetNoi').value;

    // Xử lý:
    let phiND = 25;
    let tong = 0;
    let ketQua = "";
    let curentFormat = new Intl.NumberFormat("vn-VN");
    let phiDN =15;
    let phiCoBanDN = 0;

    

    
    if(soKetNoi <=10){
      phiCoBanDN =7.5 * soKetNoi;
    }else if(soKetNoi >10){
      phiCoBanDN = 75 + ((soKetNoi - 10)* 5 );
    }

    if(khachHang === '1')
    {
      tong = (soKenhCC * 7.5) + phiND;
    }
    else if(khachHang === '2'){
      tong = (phiDN + phiCoBanDN + (soKenhCC * 50));
    }else if(khachHang === '0'){
      alert("hãy chọn loại khách hàng");
    }
    ketQua = "Mã khách hàng: " + maKH + ";\n" + "Tiền Cáp: " + "$" + curentFormat.format(tong);
    alert(ketQua);
  }