export function Badges() {
    return(
        <div className="w-[40%] pl-30 pt-10 flex flex-col items-center text-center">
            <ul>
                <li>
                    <span className="text-3xl font-semibold">Segurança</span>
                    <img src="security.png" alt="Handshaking" className="w-40"/>
                </li>
            </ul>
            <ul>
                <li>
                    <span className="text-3xl font-semibold">Eficiência</span>
                    <img src="efficient.png" alt="Handshaking" className="w-40"/>
                </li>
            </ul>
            <ul>
                <li>
                    <span className="text-3xl font-semibold">Qualidade</span>
                    <img src="quality.png" alt="Handshaking" className="w-40"/>
                </li>
            </ul>
        </div>
    )
}