import React, { Component } from 'react';
import SectionTitle from '../SectionTitle';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import {
   Select,
   RadioGroup,
   FormControl,
   FormControlLabel,
   Radio,
   TextField,
} from '@material-ui/core';


export default class GiveStuffForm extends Component {

   state = {
      pageNr: 0,
   }

   warningDescription = () => {
      switch (this.state.pageNr) {
         case 0:
            return 'Uzupełnij szczegóły dotyczące Twoich rzeczy. Dzięki temu będziemy wiedzieć komu najlepiej je przekazać.'
         case 1:
            return 'Wszystkie rzeczy do oddania zapakuj w 60l worki. Dokładną instrukcję jak poprawnie spakować rzeczy znajdziesz TUTAJ.'
         case 2:
            return 'Jeśli wiesz komu chcesz pomóc, możesz wpisać nazwę tej organizacji w wyszukiwarce. Możesz też filtrować organizacje po ich lokalizacji bądź celu ich pomocy.'
         case 3:
            return 'Podaj adres oraz termin odbioru rzeczy.'
         default:
            return ''
      }
   }

   handleChange = (e) => {
      this.setState({
         [e.target.name]: e.target.value
      })
   }

   nextPage = () => { if (this.state.pageNr !== 5) this.setState({ pageNr: this.state.pageNr + 1 }) }
   prevPage = () => { if (this.state.pageNr !== 0) this.setState({ pageNr: this.state.pageNr - 1 }) }

   pageInput = () => {
      switch (this.state.pageNr) {
         case 0:
            return <>
               <FormControl component="fieldset" >
                  <div className='chooseThings-header' >Zaznacz co chcesz oddać</div>
                  <RadioGroup className='chooseThings-select' aria-label="chooseThings" name="chooseThings" value={this.state.chooseThings} onChange={this.handleChange}>
                     <FormControlLabel classes={{ label: 'chooseThings-select-item' }} value="ubrania w dobrym stanie" control={<Radio />} label="ubrania, które nadają się do ponownego użycia" />
                     <FormControlLabel classes={{ label: 'chooseThings-select-item' }} value="ubrania do wyrzucenia" control={<Radio />} label="ubrania, do wyrzucenia" />
                     <FormControlLabel classes={{ label: 'chooseThings-select-item' }} value="zabawki" control={<Radio />} label="zabawki" />
                     <FormControlLabel classes={{ label: 'chooseThings-select-item' }} value="książki" control={<Radio />} label="książki" />
                     <FormControlLabel classes={{ label: 'chooseThings-select-item' }} value="inne" control={<Radio />} label="inne" />
                  </RadioGroup>
               </FormControl>

            </>
         case 1:
            return <>
               <div className='bagAmount-header' >Podaj liczbę 60l worków,<br /> w które spakowałeś/aś rzeczy:</div>
               <div className='bagAmount-label'>Liczba 60l worków:</div>
               <FormControl component="fieldset" >
                  <Select variant='outlined' native name='bagAmount' value={this.state.bagAmount} onChange={this.handleChange}>
                     <option value="1">1</option>
                     <option value="2">2</option>
                     <option value="3">3</option>
                     <option value="4">4</option>
                     <option value="5">5</option>
                  </Select>
               </FormControl>
            </>
         case 2:
            return <>
               <div className='bagAmount-header'>Lokalizacja</div>
               <Select variant='outlined' native name='location' value={this.state.location} onChange={this.handleChange}>
                  <option value="Poznań">Poznań</option>
                  <option value="Warszawa">Warszawa</option>
                  <option value="Kraków">Kraków</option>
                  <option value="Wrocław">Wrocław</option>
                  <option value="Katowice">Katowice</option>
               </Select>
               <div className='subpage2-description'>Komu chcesz pomóc?</div>
               <RadioGroup aria-label="whomToHelp" name="whomToHelp" value={this.state.whomToHelp} onChange={this.handleChange}>
                  <FormControlLabel classes={{ label: 'chooseThings-select-item' }} value="dzieciom" control={<Radio />} label="dzieciom" />
                  <FormControlLabel classes={{ label: 'chooseThings-select-item' }} value="samotnym matkom" control={<Radio />} label="samotnym matkom" />
                  <FormControlLabel classes={{ label: 'chooseThings-select-item' }} value="bezdomnym" control={<Radio />} label="bezdomnym" />
                  <FormControlLabel classes={{ label: 'chooseThings-select-item' }} value="niepełnosprawnym" control={<Radio />} label="niepełnosprawnym" />
                  <FormControlLabel classes={{ label: 'chooseThings-select-item' }} value="osobom starszym" control={<Radio />} label="osobom starszym" />
               </RadioGroup>
               <div className='subpage2-description'>Wpisz nazwę konkretnej organizacji (opcjonalnie)</div>
               <form noValidate autoComplete="off">
                  <TextField variant="outlined" value={this.state.organization} name='organization' onChange={this.handleChange} />
               </form>
            </>
         case 3:
            return <>
               <div className='bagAmount-header'>Podaj adres oraz termin odbioru rzeczy przez kuriera</div>
               <div className='subpage3-inputs'>
                  <div className='subpage3-inputs-column'>
                     <div className='subpage2-description'>Adres odbioru:</div>
                     <TextField variant="outlined" value={this.state.street} onChange={this.handleChange} name='street' label="Ulica" />
                     <TextField variant="outlined" value={this.state.city} onChange={this.handleChange} name='city' label="Miasto" />
                     <TextField variant="outlined" value={this.state.zipCode} onChange={this.handleChange} name='zipCode' label="Kod pocztowy" />
                     <TextField variant="outlined" value={this.state.phoneNr} onChange={this.handleChange} name='phoneNr' label="Numer telefonu" />
                  </div>
                  <div className='subpage3-inputs-column'>
                     <div className='subpage2-description'>Termin odbioru:</div>
                     <TextField variant="outlined" value={this.state.date} onChange={this.handleChange} name='date' label="Data" />
                     <TextField variant="outlined" value={this.state.hour} onChange={this.handleChange} name='hour' label="Godzina" />
                     <TextField variant="outlined" rows="3" multiline value={this.state.comments} onChange={this.handleChange} name='comments' label="Uwagi dla kuriera" />
                  </div>
               </div>

            </>
         case 4:
            return <>
               <div className='bagAmount-header'>Podsumowanie Twojej darowizny</div>
               <div className='subpage2-description'>Oddajesz:</div>
               <div>
                  <div></div>
                  <div>{this.state.bagAmount} worki, {this.state.chooseThings}, {this.state.whomToHelp}</div>
               </div>
               <div>
                  <div></div>
                  <div>dla lokalizacji: {this.state.location}</div>
               </div>
               <div className='subpage3-inputs'>
                  <div className='subpage3-inputs-column'>
                     <div className='subpage2-description'>Adres odbioru:</div>
                     <div className='subpage3-inputs'>
                        <div className='subpage4-column'>
                           <div>
                              <div>Ulica</div>
                              <div>{this.state.street}</div>
                           </div>
                           <div>
                              <div>Miasto</div>
                              <div>{this.state.city}</div>
                           </div>
                           <div>
                              <div>Kod<br />pocztowy</div>
                              <div>{this.state.zipCode}</div>
                           </div>
                           <div>
                              <div>Numer<br />telefonu</div>
                              <div>{this.state.phoneNr}</div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className='subpage3-inputs-column'>
                     <div className='subpage2-description'>Termin odbioru:</div>
                     <div className='subpage3-inputs'>
                        <div className='subpage4-column'>
                           <div>
                              <div>Data</div>
                              <div>{this.state.date}</div>
                           </div>
                           <div>
                              <div>Godzina</div>
                              <div>{this.state.hour}</div>
                           </div>
                           <div>
                              <div>Uwagi<br />dla kuriera</div>
                              <div>{this.state.comments}</div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>

            </>
         case 5:
            return <div className='subpage6'>
               <SectionTitle>Dziękujemy za przesłanie formularza<br />Na maila prześlemy wszelkie informacje o odbiorze</SectionTitle>
            </div>
         default:
            return ''
      }
   }

   shouldRenderNextButton = () => this.state.pageNr < 4
   shouldRenderPrevButton = () => ![0, 5].includes(this.state.pageNr)
   shouldRenderConfirmButton = () => this.state.pageNr === 4
   shouldRenderStep = () => this.state.pageNr < 4
   shouldRenderWarning = () => this.state.pageNr < 4
   render() {
      const theme = createMuiTheme({
         palette: {
            secondary: {
               main: '#FAD648',
            },
         },
      });

      return (
         <ThemeProvider theme={theme}>
            <div>{this.shouldRenderWarning() ?
               <div className='warningBox'>
                  <div className='warningBox-header'>Ważne!</div>
                  <div className='warningBox-description'>{this.warningDescription()}</div>
               </div> : null}
               <div className='GiveStuffForm-banner'>
                  {this.shouldRenderStep() ? <div className='GiveStuffForm-step'>Krok {this.state.pageNr + 1}/4</div> : null}
                  <div className='GiveStuffForm-subpage'>{this.pageInput()}</div>
                  <div className='GiveStuffForm-buttons'>
                     {this.shouldRenderPrevButton() ? <div className='GiveStuffForm-button' onClick={this.prevPage}>Wstecz</div> : null}
                     {this.shouldRenderNextButton() ? <div className='GiveStuffForm-button' onClick={this.nextPage}>Dalej</div> : null}
                     {this.shouldRenderConfirmButton() ? <div className='GiveStuffForm-button' onClick={this.nextPage}>Potwierdzam</div> : null}
                  </div>

               </div>
            </div>
         </ThemeProvider>
      )

   }
}