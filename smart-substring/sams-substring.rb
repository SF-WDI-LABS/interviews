def smart_substring(full_string)
	# return full string early if it's already less than 40 chars
	if full_string.length <= 40
		return full_string
	end

	# set up an array to store all the indices with spaces
	spaces = []
	(0..39).each do |i|
		spaces.push i if full_string[i] == " "
	end

	# if there were spaces, return string up to the last space
	# otherwise, return an empty string
	if spaces.length > 0
		full_string[0..spaces.last] 
	else
		""
	end
	
end

tests = [
	{input: "", expected: ""},
	{input: "supercalifrigilisticexpialidociousfourtypluscharacterword", expected: ""},
	{input: "A star is a luminous sphere of plasma held together by its own gravity. The nearest star to Earth is the Sun. Other stars, mostly in the Milky Way, are visible from Earth during the night, appearing as a multitude of fixed luminous points in the sky due to their immense distance from Earth.\n- Wikipedia", expected: "A star is a luminous sphere of plasma "},
	{input: "Hello World!", expected: "Hello World!"},
	{input: "                                               ", expected: "                                        "},
	{input: "   a  ", expected: "   a  "},
	{input: "This is exactly forty characters long!!!", expected: "This is exactly forty characters long!!!"}
]


got = nil
tests.each do |test|
	puts "\nTesting smart_substring with input \"#{test[:input]}\""
	puts "\texpected: \"#{test[:expected]}\""
	got  = smart_substring(test[:input]);
	puts "\tgot:      \"#{got}\""
	puts (got==test[:expected] ? "\tPASS!" : "\tFAIL!");
end