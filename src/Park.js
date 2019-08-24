import React from 'react'
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';
export const Park = () => (
  <div id="checkone">
    <h2>Парк специальной техники</h2>
    <hr />
    <p><b>ТОО «ТIЗIМ»</b> имеет в наличии весь спектр специальной техники для
производства работ по монтажу сетей газоснабжения и инженерных
систем</p>
 
<MDBTable>
  <MDBTableHead color="black" textWhite>
        <tr>
          <th>#</th>
          <th>Характеристики</th>
          <th>Кол-во</th>
          
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        <tr>
          <td>Экскаваторы</td>
          <td>1м3</td>
          <td>2 шт</td>
          
        </tr>
        <tr>
          <td>Самосвалы</td>
          <td>Хово</td>
          <td>3 шт</td>
          
        </tr>
        <tr>
          <td>Каток</td>
          <td>14 тонн</td>
          <td>1 шт</td>
          
        </tr>

        <tr>
          <td>Автокран</td>
          <td>25 тонн</td>
          <td>1 шт</td>
          
        </tr>
        <tr>
          <td>Агрегат сварочный</td>
          <td>дизельный</td>
          <td>4 шт</td>
          
        </tr>

        <tr>
          <td>Автомиксер</td>
          <td></td>
          <td>1 шт</td>
          
        </tr>

        <tr>
          <td>Погрузчик</td>
          <td>3м3</td>
          <td>1 шт</td>          
        </tr>

        <tr>
          <td>Грейдер</td>
          <td></td>
          <td>1 шт</td>
          
        </tr>
        <tr>
          <td>Трубоукладчики</td>
          <td></td>
          <td>1 шт</td>
          
        </tr>

        <tr>
          <td>Длиномер</td>
          <td></td>
          <td>1 шт</td>
          
        </tr>

      </MDBTableBody>
    </MDBTable>
  </div>
)
