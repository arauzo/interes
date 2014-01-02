# Compilar articulos
#
# Este make file ha sido desarrollado en una Debian
# Paquetes necesarios o recomendados:
#  -Figuras: transfig, netpbm, gs, dia, inkscape (for SVG to PDF conversion)
#  -Latex: texlive-latex-extra, texlive-science
#
.PHONY = all clean
SHELL = /bin/bash

# Nombre sin extension del articulo principal
BASENAME = video

# Si hay ficheros .tex adicionales listar aqui
FUENTES = 

IMAGENES = \
	IntSimple1.pdf IntSimple2.pdf IntSimple3.pdf IntSimple4.pdf IntSimple5.pdf IntSimple6.pdf \
	IntSimple7.pdf IntSimple8.pdf IntSimple9.pdf IntSimple.pdf \
	IntCompuesto1.pdf IntCompuesto.pdf IntCompuesto2.pdf \
	by-sa.pdf

all :	$(BASENAME).pdf 
#$(BASENAME)en.pdf

# --- Generacion del articulo principal ---
$(BASENAME).pdf :	$(BASENAME).tex $(FUENTES) $(IMAGENES)
	@echo "----- LATEX 1 (get toc and refs) ----"
	pdflatex $<
	@echo -e "\n\n\n\n\n\n\n----- LATEX 2 (rerun to get cross-references right) ----"
	pdflatex $<

$(BASENAME)en.pdf :	$(BASENAME)en.tex $(FUENTES) $(IMAGENES)
	@echo "----- LATEX 1 (get toc and refs) ----"
	pdflatex $<
	@echo -e "\n\n\n\n\n\n\n----- LATEX 2 (rerun to get cross-references right) ----"
	pdflatex $<


# --- Conversiones de imagenes y figuras --------
%.eps : %.tex
	latex $<
	dvips -E $(<:.tex=.dvi) -o $(<:.tex=.ps) 
	mv $(<:.tex=.ps) $@
	rm -f $(<:.tex=.aux) $(<:.tex=.log) $(<:.tex=.dvi) $(<:.tex=.ps)*

%.eps : %.dot
	dot -Tps $< -o $@

%.eps : %.dia
	dia -t eps -e $@ $<

%.eps : %.fig
	fig2dev -L eps $< $@

%.pdf : %.eps
	epstopdf $<

%.png :	%.fig
	fig2dev -L png $< $@

#%.eps : %.png
#	pngtopnm $< | pnmtops >$@

%.png : %.eps
	epstopng $<

%.png : %.pdf
	pdftoppm $< $<; pnmtopng $<-1.ppm >$@
	rm $<-*

%.pdf : %.svg
	inkscape -z --file=$< --export-pdf=$@

# Limpiar el directorio de ficheros generados automaticamente
clean :	
	rm -f *.ps *.dvi *.log *~ *.aux *.out *.bbl *.blg *.toc *.lof *.lot *.lox *.spl *.idx
	shopt -s nullglob; for f in *.pdf; do if [ -f $${f/%.pdf/.tex} ]; then rm $${f}; fi; done 
	shopt -s nullglob; for f in *.pdf; do if [ -f $${f/%.pdf/.dot} ]; then rm $${f}; fi; done 
	shopt -s nullglob; for f in *.pdf; do if [ -f $${f/%.pdf/.dia} ]; then rm $${f}; fi; done 
	shopt -s nullglob; for f in *.pdf; do if [ -f $${f/%.pdf/.fig} ]; then rm $${f}; fi; done 
	shopt -s nullglob; for f in *.pdf; do if [ -f $${f/%.pdf/.eps} ]; then rm $${f}; fi; done 
	shopt -s nullglob; for f in *.pdf; do if [ -f $${f/%.pdf/.svg} ]; then rm $${f}; fi; done 
	shopt -s nullglob; for f in *.eps; do if [ -f $${f/%.eps/.tex} ]; then rm $${f}; fi; done 
	shopt -s nullglob; for f in *.eps; do if [ -f $${f/%.eps/.dot} ]; then rm $${f}; fi; done 
	shopt -s nullglob; for f in *.eps; do if [ -f $${f/%.eps/.dia} ]; then rm $${f}; fi; done 
	shopt -s nullglob; for f in *.eps; do if [ -f $${f/%.eps/.fig} ]; then rm $${f}; fi; done 
	shopt -s nullglob; for f in *.png; do if [ -f $${f/%.png/.fig} ]; then rm $${f}; fi; done 

