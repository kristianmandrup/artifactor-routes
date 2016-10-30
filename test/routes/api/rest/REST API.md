# REST API

### Artefact entity API

- `:type/:id` - all versions
- `:type/:id/latest` - latest version only

### Popular with

- `:type/:id/popular` 

Find other artefacts popular with identified artefact, with installations > minCount.

Optionally add one or more extra filters on popular artefacts found:

- `minInstalls=count`
- `type=artefactType`
- `keyword`, `category`, `author`
- `q` with any text fields matching on query `q`
- rating, `min`, `max`
- `from`, `to`
- status, `min`, `max`
- version, `min`, `max`

### Search API

- `:type?q=query` - `components?q=auth+password`

### Keyword search

- `:type?keyword=auth&keyword=password` - find artefacts of type where `keywords` matches `auth` or `password` 

### Category search

- `:type?category=auth&category=password` - find artefacts of type where `categories` matches `auth` or `password` 

### Author search

- `:type?author=kristian&author=mandrup` - find artefacts created by author matching `kristian` or `mandrup`
- `:type?author=kristian+mandrup` - find artefacts created by author matching `kristian mandrup` 

*Query params*

`q` - text query
`category` - search categories list
`keyword` - search keywords list
`author` - search author fields

*numeric* filters

`eq` specific number
`gt` greater than
`lt` less than

Advanced filter params:

*Installs range*
- `&minInstalls=count` installations >= count
- `&minInstalls=count` installations >= count

*Date range*
- `&from=minDate` - filter from min date
- `&to=maxDate`- filter until max date

*Rating range*
- `&rating=number` - filter all rated at that number, 4 is 4 to 4.999
- `&minRating=minRating` - filter all rated at least >=
- `&maxRating=maxRating`- filter all rated at most <=

*Status range*
- `&status=exactStatusnumber` - filter all with exact status
- `&minStatus=minStatus` - filter all with status at least minStatus >= 
- `&maxStatus=maxStatus`- filter all rated at most maxStatus <=

*Version range*
- `&version=exactVersion` - find with exact version number
- `&minVersion=minRating` - filter all rated at least >=
- `&maxVersion=maxRating`- filter all rated at most <=

