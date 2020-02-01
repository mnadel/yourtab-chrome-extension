init:
	mkdir dist

clean:
	rm -rf dist

package: init
	zip dist/yourtab.zip manifest.json *.html *.js *.css *.png
