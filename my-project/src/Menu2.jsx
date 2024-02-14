import './Menu2.css'

export default function Menu2(){
    return(
    <>
        <div className="menu-container">
           
            <table>
                <thead>
                <tr>
                    <th className='wide-column'>Small<br></br> 200ml</th>
                    <th className='wide-column-1'>Medium<br></br> 300ml</th>
                    <th className='wide-column'>Large<br></br> 1 litre</th>
                    <th className="header-with-image2"></th>
                </tr>
                </thead>

                <tbody>
                <tr>
                    <td>110</td>
                    <td >160</td>
                    <td>500</td>
                    <td>Carrot</td>
                </tr>
                <tr>
                    <td>110</td>
                    <td>160</td>
                    <td>500</td>
                    <td>Carrot+Beet</td>
                </tr>
                <tr>
                    <td>110</td>
                    <td>160</td>
                    <td>500</td>
                    <td>Beet</td>
                </tr>
                <tr>
                    <td>110</td>
                    <td>160</td>
                    <td>500</td>
                    <td>ABC(Apple+Carrot+Beet)</td>
                </tr>
                <tr>
                    <td>110</td>
                    <td>160</td>
                    <td>500</td>
                    <td>Orange+Carrot+Beet</td>
                </tr>
                <tr>
                    <td>110</td>
                    <td>160</td>
                    <td>500</td>
                    <td>Carrot+Orange</td>
                </tr>
                <tr>
                    <td>130</td>
                    <td>190</td>
                    <td>-</td>
                    <td>Detox <p style={{ fontWeight: 'normal',fontSize:"20px" }}>(Cucumber+Granny Smith Apple+<br></br>Ginger+Lemon+Mint+<br></br>Spinach/Parsely/Basil/Coriander)</p></td>
                </tr>
                </tbody>
        </table>
        <table>
                <tbody >
                <tr>
                    <td className='wide-column'>100</td>
                    <td className='wide-column-1'>140</td>
                    <td className='wide-column'>450</td>
                    <td>Mosambi</td>
                </tr>
                <tr>
                    <td>100</td>
                    <td>140</td>
                    <td>450</td>
                    <td>Orange</td>
                </tr>
                <tr>
                    <td>100</td>
                    <td>140</td>
                    <td>450</td>
                    <td>Ganga Jamuna <p style={{ fontWeight: 'normal',fontSize:"20px" }}>(Mosambi+Orange)</p></td>
                </tr>
                <tr>
                    <td>130</td>
                    <td>190</td>
                    <td>600</td>
                    <td>Valencia Orange</td>
                </tr>
                <tr>
                    <td>130</td>
                    <td>190</td>
                    <td>600</td>
                    <td>Valencia Orange + Mosmbi</td>
                </tr>
                </tbody>
        </table>

        <table>
                <tbody >
                <tr>
                    <td className='wide-column'>110</td>
                    <td className='wide-column-1'>160</td>
                    <td className='wide-column'>500</td>
                    <td>Grapes + Mint</td>
                </tr>
                <tr>
                    <td>110</td>
                    <td>160</td>
                    <td>500</td>
                    <td>Mix Fruit<br></br>
                    <p style={{ fontWeight: 'normal',fontSize:"20px" }}>(Apple+Beet+Pineapple+Grapes+Mint)</p></td>
                </tr>
                
                </tbody>
        </table>
        <table>
                <tbody >
                <tr>
                    <td className='wide-column'>110</td>
                    <td className='wide-column-1'>160</td>
                    <td className='wide-column'>500</td>
                    <td>Apple + Pineapple</td>
                </tr>
                <tr>
                    <td>110</td>
                    <td>160</td>
                    <td>500</td>
                    <td>Apple + Orange</td>
                </tr>
                <tr>
                    <td>130</td>
                    <td>190</td>
                    <td>600</td>
                    <td>Granny Smith Apple</td>
                </tr>
                <tr>
                    <td>130</td>
                    <td>190</td>
                    <td>600</td>
                    <td>Fiber Pulpy<p style={{ fontWeight: 'normal',fontSize:"20px" }}>(Diabetic care)</p> </td>
                </tr>
                
                
                </tbody>
        </table>
        
    </div>
</>
        
        
    );
}