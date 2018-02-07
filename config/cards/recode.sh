for file in *.json; do
iconv -f UTF-8 -t ISO-8859-1 "$file">tmp.json && mv tmp.json "$file"
done