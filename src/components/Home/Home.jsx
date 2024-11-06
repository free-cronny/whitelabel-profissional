import * as S from './styles'

import arrowDown from '../../assets/arrow-down.svg'
import searchButton from '../../assets/search-circle-svg.svg'
import {ProfessionalsData} from '../../services/profissionals'

import { useState } from 'react'

export const Home = () => {
    const [valueSearch, setValueSearch] = useState('')
    const [filteredResults, setFilteredResults] = useState(ProfessionalsData.professionals);
    console.log(valueSearch)

    return (

            <S.Container>
                <S.Header>
                    <h1>K M A U</h1>
                    <h3>Know More About Us</h3>
                    <img src={arrowDown} alt="" />
                </S.Header>
                <S.InputAndButton>
                    <input type="text" placeholder='Explore Our Options'
                        onKeyUp={(e) => {
                            const searchText = e.target.value.toLowerCase();
                            setValueSearch(searchText);
                        
                            const filteredProfessionals = ProfessionalsData.professionals.filter((professional) =>
                              professional.name.toLowerCase().includes(searchText)
                            );
                        
                            setFilteredResults(filteredProfessionals);
                        }}
                    />
                    <button>
                        <p>Pesquisar</p>
                        <img src={searchButton} alt="" />
                    </button>
                </S.InputAndButton>
                          
                <S.Cards>                    
                    {filteredResults.map((page) => {
                        return (
                            <S.Card key={page.id}>
                                <p>{page.name}</p>
                                <img src='https://media.discordapp.net/attachments/1001887956568653975/1153713473352634463/image.png?width=886&height=498' style={{width: 250, background: '#fff', height: 150, borderRadius: 15}}/>
                                <a href={`/${page.name}`}>Link</a>
                            </S.Card>
                        )
                    })}
                </S.Cards>


            </S.Container>
        
    )
}