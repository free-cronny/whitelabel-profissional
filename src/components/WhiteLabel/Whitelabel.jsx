import * as S from './styles';
import { ProfessionalsData } from '../../services/profissionals';
import 'animate.css';
// import { useParams } from 'react-router-dom';

export const Whitelabel = () => {
  // const { profissionalname } = useParams();
  
  // const professional = ProfessionalsData.professionals.find((prof) =>
  //   prof.name.toLowerCase() === profissionalname.toLowerCase()
  // );

  // if (!professional) {
  //   return <div>Profissional não encontrado</div>;
  // }

  const professional = ProfessionalsData.professionals[0]
  console.log(professional);

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
                <div style={{textAlign: 'center', width: '100%'}} className='animate__animated animate__fadeIn animate__delay-1s'>
                  <h1>{professional.name}</h1>
                </div>
              </div>
              <hr />
              <h3 className='animate__animated animate__fadeIn animate__delay-2s'>{professional.title}</h3>
            </S.NameProfissional>
          </S.HeaderNameProfissional>

          <S.MiddleContent>
            <S.PhotoAndPlace>
              <S.ProfissionalPhoto>
                <img src={professional.photo} alt="" className='animate__animated animate__fadeIn animate__delay-3s'/>
              </S.ProfissionalPhoto>
              <S.PhotoPlace>
                <img className='animate__animated animate__fadeIn animate__delay-3s'
                src="https://i.pinimg.com/originals/61/6e/74/616e74bdf5ef7c083925b1a6bc23e8f0.jpg" alt="" />
              </S.PhotoPlace>
            </S.PhotoAndPlace>
            <S.AboutProfissional>
              <p className='animate__animated animate__fadeIn animate__delay-4s'><span>{professional.workname}</span></p>
              <hr />
              <p className='animate__animated animate__fadeIn animate__delay-4s'>{professional.resume}</p>
              <hr />
            </S.AboutProfissional>
          </S.MiddleContent>
          <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', background: 'url(https://i.pinimg.com/564x/16/c2/7d/16c27d9e9c8a0c47cc365324a5b91a59.jpg)' }}>
            {professional.photosFromWork.map((photo, index) => {
              return (
                <img
                  style={{ width: '5.33844rem', margin: '20px 5px', borderRadius: '0.8125rem', border: '1px solid black', boxShadow: 'rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px' }}
                  key={index}
                  src={photo}
                />
              );
            })}
          </div>
          <S.FooterProfissional>
          
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
    
          </S.FooterProfissional>
        </S.InfosProfissional>
      </div>
    </S.Container>
  );
};
