import React, { Component } from 'react';
import SectionTitle from '../SectionTitle';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import {
   Select,
   InputLabel,
   MenuItem,
   RadioGroup,
   FormControl,
   FormControlLabel,
   Radio,
   FormLabel,
   TextField,
} from '@material-ui/core';


export default class GiveStuffForm extends Component {

   state = {
      pageNr: 0
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
            return <div>
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

            </div>
         case 1:
            return <div>
               <InputLabel id="bagAmount">Liczba 60l worków</InputLabel>
               <Select labelId="bagAmount" id="selectBag" name='bagAmount' value={this.state.bagAmount} onChange={this.handleChange}>
                  <MenuItem value="1">1</MenuItem>
                  <MenuItem value="2">2</MenuItem>
                  <MenuItem value="3">3</MenuItem>
                  <MenuItem value="4">4</MenuItem>
                  <MenuItem value="5">5</MenuItem>
               </Select>
            </div>
         case 2:
            return <>
               <InputLabel id="location">Lokalizacja</InputLabel>
               <Select labelId="location" id="selectCity" name='location' value={this.state.location} onChange={this.handleChange}>
                  <MenuItem value="Poznań">Poznań</MenuItem>
                  <MenuItem value="Warszawa">Warszawa</MenuItem>
                  <MenuItem value="Kraków">Kraków</MenuItem>
                  <MenuItem value="Wrocław">Wrocław</MenuItem>
                  <MenuItem value="Katowice">Katowice</MenuItem>
               </Select>
               <FormControl component="fieldset" >
                  <FormLabel component="legend">Komu chcesz pomóc?</FormLabel>
                  <RadioGroup aria-label="whomToHelp" name="whomToHelp" value={this.state.whomToHelp} onChange={this.handleChange}>
                     <FormControlLabel value="dzieciom" control={<Radio />} label="dzieciom" />
                     <FormControlLabel value="samotnym matkom" control={<Radio />} label="samotnym matkom" />
                     <FormControlLabel value="bezdomnym" control={<Radio />} label="bezdomnym" />
                     <FormControlLabel value="niepełnosprawnym" control={<Radio />} label="niepełnosprawnym" />
                     <FormControlLabel value="osobom starszym" control={<Radio />} label="osobom starszym" />
                  </RadioGroup>
               </FormControl>
               <form noValidate autoComplete="off">
                  <TextField value={this.state.organization} name='organization' onChange={this.handleChange} label="Konkretna organizacja (opcjonalnie)" />
               </form>
            </>
         case 3:
            return <>
               <div>Podaj adres oraz termin odbioru rzecz przez kuriera</div>
               <div>Adres odbioru:</div>
               <TextField value={this.state.street} onChange={this.handleChange} name='street' label="Ulica" />
               <TextField value={this.state.city} onChange={this.handleChange} name='city' label="Miasto" />
               <TextField value={this.state.zipCode} onChange={this.handleChange} name='zipCode' label="Kod pocztowy" />
               <TextField value={this.state.phoneNr} onChange={this.handleChange} name='phoneNr' label="Numer telefonu" />

               <div>Termin odbioru:</div>
               <TextField value={this.state.date} onChange={this.handleChange} name='date' label="Data" />
               <TextField value={this.state.hour} onChange={this.handleChange} name='hour' label="Godzina" />
               <TextField value={this.state.comments} onChange={this.handleChange} name='comments' label="Uwagi dla kuriera" />

            </>
         case 4:
            return <>
               <div>Podsumowanie Twojej darowizny</div>
               <div>Oddajesz:</div>
               <div>
                  <div></div>
                  <div>{this.state.bagAmount} worki, {this.state.chooseThings}, {this.state.whomToHelp}</div>
               </div>
               <div>
                  <div></div>
                  <div>dla lokalizacji: {this.state.location}</div>
               </div>
               <div>
                  <div>
                     <div>Adres odbioru:</div>
                     <div>
                        <div>
                           <div>Ulica</div>
                           <div>Miasto</div>
                           <div>Kod<br />pocztowy</div>
                           <div>Numer<br />telefonu</div>
                        </div>
                        <div>
                           <div>{this.state.street}</div>
                           <div>{this.state.city}</div>
                           <div>{this.state.zipCode}</div>
                           <div>{this.state.phoneNr}</div>
                        </div>
                     </div>
                  </div>
                  <div>
                     <div>Termin odbioru:</div>
                     <div>
                        <div>
                           <div>Data</div>
                           <div>Godzina</div>
                           <div>Uwagi<br />dla kuriera</div>
                        </div>
                        <div>
                           <div>{this.state.date}</div>
                           <div>{this.state.hour}</div>
                           <div>{this.state.comments}</div>
                        </div>
                     </div>
                  </div>
               </div>

            </>
         case 5:
            return <>
               <SectionTitle>Dziękujemy za przesłanie formularza<br />Na maila prześlemy wszelkie informacje o odbiorze</SectionTitle>
            </>
         default:
            return ''
      }
   }

   shouldRenderNextButton = () => this.state.pageNr < 4
   shouldRenderPrevButton = () => ![0, 5].includes(this.state.pageNr)
   shouldRenderConfirmButton = () => this.state.pageNr === 4
   shouldRenderStep = () => this.state.pageNr < 4

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
            <div>
               <div className='warningBox'>
                  <div className='warningBox-header'>Ważne!</div>
                  <div className='warningBox-description'>{this.warningDescription()}</div>
               </div>
               <div className='GiveStuffForm-banner'>
                  {this.shouldRenderStep() ? <div className='GiveStuffForm-step'>Krok {this.state.pageNr + 1}/4</div> : null}
                  <div>{this.pageInput()}</div>
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