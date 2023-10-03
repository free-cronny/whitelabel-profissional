import * as S from './styles';
import { ProfessionalsData } from '../../services/profissionals';
import { useParams } from 'react-router-dom';

export const Whitelabel = () => {
  const { profissionalname } = useParams();
  
  const professional = ProfessionalsData.professionals.find((prof) =>
    prof.name.toLowerCase() === profissionalname.toLowerCase()
  );

  if (!professional) {
    return <div>Profissional não encontrado</div>;
  }

  return (
    <S.Container color={professional.backgroundColor}>
      {/* <S.Particles />  */}
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <S.InfosProfissional>
        
          <S.HeaderNameProfissional>
            <S.NameProfissional>
              <div>
                <div>
                  <img src="https://i.pinimg.com/564x/e0/0c/90/e00c90aba4be40659b1e3d2ad61e65c7.jpg" />
                </div>
                <div style={{textAlign: 'center', width: '100%'}}>
                  <h1>{professional.name}</h1>
                </div>
              </div>
              <hr />
              <h3>{professional.title}</h3>
            </S.NameProfissional>
          </S.HeaderNameProfissional>

          <S.MiddleContent>
            <S.PhotoAndPlace>
              <S.ProfissionalPhoto>
                <img src={professional.photo} alt="" />
              </S.ProfissionalPhoto>
              <S.PhotoPlace>
                <img src="https://cdn.discordapp.com/attachments/1157680036770492486/1158494834475155466/barber.jpg?ex=651c73e4&is=651b2264&hm=95503392d3f36e5de88f842f70e5f2d7f5da0605b169857020487c601a72e3c4&" alt="" />
              </S.PhotoPlace>
            </S.PhotoAndPlace>
            <S.AboutProfissional>
              <p><span>{professional.workname}</span></p>
              <hr />
              <p>{professional.resume}</p>
              <hr />
            </S.AboutProfissional>
          </S.MiddleContent>
          <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', background: 'url(https://i.pinimg.com/564x/16/c2/7d/16c27d9e9c8a0c47cc365324a5b91a59.jpg)' }}>
            {professional.photosFromWork.map((photo) => {
              return (
                <img
                  style={{ width: '5.33844rem', margin: '20px 5px', borderRadius: '0.8125rem', border: '1px solid black', boxShadow: 'rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;' }}
                  key={photo.id}
                  src={photo}
                />
              );
            })}
          </div>
          <S.FooterProfissional>
            <hr />
            <div>
              <p>Endereço:</p>
              <hr />
              <p>{professional.infosAboutPlace.street}</p>
              <hr />
              <p>{professional.infosAboutPlace.neighborhood}</p>
              <hr />
              <p>{professional.infosAboutPlace.city}</p>
              <hr />
              <p>CEP: {professional.infosAboutPlace.zipCode}</p>
              <hr />
            </div>
            <hr />
            <div>
              <p>Horário de Funcionamento:</p>
              <hr />
              <p>{professional.businessHours.mondayToFriday}</p>
              <hr />
              <p>{professional.businessHours.saturday}</p>
              <hr />
              <p>{professional.businessHours.sunday}</p>
              <hr />
            </div>
            <hr />
            <div>
              <p>Contato:</p>
              <hr />
              <p>Telefone: {professional.contact.telephone}</p>
              <hr />
              <p>E-mail: {professional.contact.email}</p>
              <hr />
              <p>WhatsApp: {professional.contact.whatsapp}</p>
              <hr />
            </div>
            <hr />
          </S.FooterProfissional>
        </S.InfosProfissional>
      </div>
    </S.Container>
  );
};
