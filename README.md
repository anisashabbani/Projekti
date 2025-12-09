# A&E Beauty Salon Website

Website për salonin e bukurisë A&E, i krijuar në gjuhën shqipe.

## Përmbajtja e Projektit

Ky projekt përmban një website të plotë për salonin e bukurisë A&E me faqet e mëposhtme:

- **Faqja Kryesore (index.html)** - Faqja hyrëse me informacione rreth shërbimeve
- **Rreth Nesh (about.html)** - Informacione rreth historisë, misionit dhe ekipit
- **Kontakt (contact.html)** - Formular kontakti dhe informacione kontakti
- **Kyçu (login.html)** - Formular për kyçje në llogari
- **Regjistrohu (register.html)** - Formular për regjistrim të ri

## Karakteristikat

### Funksionalitetet

- ✅ Validim i formave me Plain JavaScript (pa librari)
- ✅ Validim për formularin e kontaktit
- ✅ Validim për formularin e kyçjes (login)
- ✅ Validim për formularin e regjistrimit (register)
- ✅ Navigim responsive me menu mobile
- ✅ Dizajn responsive për të gjitha pajisjet

### Teknologjitë e Përdorura

- HTML5
- CSS3 (me Grid dhe Flexbox)
- JavaScript (Plain JavaScript, pa librari për validim)
- Responsive Design

## Struktura e Projektit

```
Projekti/
│
├── index.html              # Faqja kryesore
├── about.html              # Faqja "Rreth Nesh"
├── contact.html            # Faqja "Kontakt"
├── login.html              # Faqja "Kyçu"
├── register.html           # Faqja "Regjistrohu"
│
├── css/
│   └── style.css           # Stilizimi kryesor
│
├── js/
│   ├── main.js             # JavaScript për navigim
│   ├── contact-validation.js    # Validim për formularin e kontaktit
│   ├── login-validation.js      # Validim për formularin e kyçjes
│   └── register-validation.js   # Validim për formularin e regjistrimit
│
└── README.md               # Dokumentacioni i projektit
```

## Validimi i Formave

Të gjitha format validohen me Plain JavaScript (pa librari):

### Formular Kontakti
- Emri dhe mbiemri (i detyrueshëm, min 3 karaktere)
- Email (i detyrueshëm, format i vlefshëm)
- Telefon (opsional, por nëse jepet duhet të jetë i vlefshëm)
- Subjekti (i detyrueshëm, min 5 karaktere)
- Mesazhi (i detyrueshëm, min 10 karaktere)

### Formular Kyçje
- Email (i detyrueshëm, format i vlefshëm)
- Fjalëkalimi (i detyrueshëm, min 6 karaktere)

### Formular Regjistrim
- Emri dhe mbiemri (i detyrueshëm, min 3 karaktere, vetëm shkronja)
- Email (i detyrueshëm, format i vlefshëm)
- Telefon (opsional, por nëse jepet duhet të jetë i vlefshëm)
- Fjalëkalimi (i detyrueshëm, min 8 karaktere, duhet të përmbajë shkronjë të vogël, të madhe dhe numër)
- Konfirmimi i fjalëkalimit (duhet të përputhet me fjalëkalimin)
- Pranimi i kushteve (i detyrueshëm)

## Responsive Design

Website-i është i optimizuar për:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (deri në 767px)

## Si të Përdoret

1. Hapni `index.html` në një shfletues web
2. Navigoni midis faqeve duke përdorur menunë
3. Plotësoni format për të testuar validimin

## Git dhe Version Control

Projekti duhet të menaxhohet me Git dhe të publikohet në GitHub.

### Komandat Git bazë:

```bash
git init
git add .
git commit -m "Initial commit - A&E Beauty Salon website"
git remote add origin <your-github-repo-url>
git push -u origin main
```

## Shënime

- Ky është një projekt frontend-only (nuk ka backend)
- Formatet tregojnë mesazhe suksesi por nuk dërgojnë të dhëna në server
- Validimi është i implementuar me Plain JavaScript siç kërkohet

## Autor

Projekt i krijuar për salonin e bukurisë A&E.

## Licenca

© 2024 A&E Beauty Salon. Të gjitha të drejtat e rezervuara.
