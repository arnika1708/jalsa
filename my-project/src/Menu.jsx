import './Menu.css'

export default function Menu(){
    return(
    <>
        <div className="menu-container">
           
            <table>
                <thead>
                <tr>
                    <th className='wide-column'>Small<br></br> 200ml</th>
                    <th className='wide-column-1'>Medium<br></br> 300ml</th>
                    <th className='wide-column'>Large<br></br> 1 litre</th>
                    <th className="header-with-image"></th>
                </tr>
                </thead>

                <tbody>
                <tr>
                    <td>70</td>
                    <td >90</td>
                    <td>300</td>
                    <td>Watermelon</td>
                </tr>
                <tr>
                    <td>90</td>
                    <td>130</td>
                    <td>400</td>
                    <td>Watermelon + Orange</td>
                </tr>
                <tr>
                    <td>90</td>
                    <td>130</td>
                    <td>400</td>
                    <td>Watermelon + Mosambi</td>
                </tr>
                </tbody>
        </table>
        <table>
                <tbody >
                <tr>
                    <td className='wide-column'>100</td>
                    <td className='wide-column-1'>140</td>
                    <td className='wide-column'>450</td>
                    <td>Muskmelon</td>
                </tr>
                <tr>
                    <td>100</td>
                    <td>140</td>
                    <td>450</td>
                    <td>Muskmelon+Pineapple</td>
                </tr>
                <tr>
                    <td>100</td>
                    <td>140</td>
                    <td>450</td>
                    <td>Muskmelon+Watermelon</td>
                </tr>
                <tr>
                    <td>100</td>
                    <td>140</td>
                    <td>450</td>
                    <td>Muskmelon+Orange</td>
                </tr>
                </tbody>
        </table>

        <table>
                <tbody >
                <tr>
                    <td className='wide-column'>100</td>
                    <td className='wide-column-1'>140</td>
                    <td className='wide-column'>450</td>
                    <td>Pineapple</td>
                </tr>
                <tr>
                    <td>110</td>
                    <td>160</td>
                    <td>500</td>
                    <td>Pineapple+Orange</td>
                </tr>
                <tr>
                    <td>110</td>
                    <td>160</td>
                    <td>500</td>
                    <td>Pineapple+Mosambi</td>
                </tr>
                </tbody>
        </table>
        <table>
                <tbody >
                <tr>
                    <td className='wide-column'>110</td>
                    <td className='wide-column-1'>160</td>
                    <td className='wide-column'>500</td>
                    <td>Pineapple Ginger Lemon</td>
                </tr>
                <tr>
                    <td>110</td>
                    <td>160</td>
                    <td>500</td>
                    <td>Orange Ginger Lemon</td>
                </tr>
                <tr>
                    <td>110</td>
                    <td>160</td>
                    <td>500</td>
                    <td>Mosambi Ginger Lemon</td>
                </tr>
                <tr>
                    <td>140</td>
                    <td>200</td>
                    <td>650</td>
                    <td>Valencia Orange Ginger Lemon</td>
                </tr>
                <tr>
                    <td>170</td>
                    <td>250</td>
                    <td>800</td>
                    <td>Anar Ginger Lemon</td>
                </tr>
                </tbody>
        </table>
        <table>
                <tbody >
                <tr>
                    <td className='wide-column'>160</td>
                    <td className='wide-column-1'>240</td>
                    <td className='wide-column'>800</td>
                    <td>Anar(Pomegranate)</td>
                </tr>
                <tr>
                    <td>160</td>
                    <td>240</td>
                    <td>800</td>
                    <td>Anar+Beet</td>
                </tr>
                </tbody>
        </table>
    </div>
</>
        
        
    );
}