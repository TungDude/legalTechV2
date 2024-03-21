let rowNo = 1;

async function addRow() {
    const table = document.getElementById('theTable');
    const row = document.createElement('tr');
    const td1 = document.createElement('td');
    const td2 = document.createElement('td');
    const td3 = document.createElement('td');
    const td4 = document.createElement('td');
    const td5 = document.createElement('td');

    td1.contentEditable = true;
    td1.name = 'td' + toString(rowNo) + '0';
    td2.contentEditable = true;
    td2.name = 'td' + toString(rowNo) + '1';
    td3.contentEditable = true;
    td3.name = 'td' + toString(rowNo) + '2';
    td4.name = 'td' + toString(rowNo) + '3';
    td5.name = 'td' + toString(rowNo) + '4';
    td4.innerHTML = '<select name="level" id="level" style="width: 80%; max-width: 150px; font-size: 12px;"><option value="" selected disabled hidden>เลือกชั้นภูมิ</option><option value="1">1</option><option value="2">2</option></select>';
    td5.innerHTML = '<select name="plants" id="plants" style="width: 100%; font-size: 12px; max-width: 150px;"><option value="" selected disabled hidden>เลือกพรรณไม้</option>"<option value="ปาล์ม">ปาล์ม</option><option value="ป่าดิบแล้ง">ป่าดิบแล้ง</option><option value="เถาวัลย์">เถาวัลย์</option><option value="พรรณไม้ชายเลน">พรรณไม้ชายเลน</option></select>';
    row.appendChild(td1);
    row.appendChild(td2);
    row.appendChild(td3);
    row.appendChild(td4);
    row.appendChild(td5);
    table.innerHTML += "<tr>" + row.innerHTML + "</tr>";
    console.log(rowNo);
    rowNo += 1;
}

function testCharacter(event) {
    if ((event.keyCode >= 48 && event.keyCode <= 57) || event.keyCode === 13) {
        return true;
    } else {
        return false;
    }
}