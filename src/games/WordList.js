const wordString = `
	cat van jam rag mat mad nap dad bat tap map hat ham fan can sad bag
	jet pet leg set web hen wet vet ten pen men red bed net fed wed
	lip rip fix wig sit sip pin bin six fin hit dig dip rib pig pit zip kid
	bot job mob box hog cop mop fox fog rob dot top log pot mom jog dog
	bug mug pug sun nut rug cut fun gum tug cup pup mud tub run bun
`;

const wordList = wordString.split(/\s+/).filter((word) => word != '');

export default wordList;
