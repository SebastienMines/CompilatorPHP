import ExpressionVarDeclaration from "./ExpressionVarDeclaration.js";
import ExpressionVarAssignation from "./ExpressionVarAssignation.js";

export default class ExpressionFactory{
	
	static create(cursor, tokens){
		let current_token= tokens[cursor.position];
		switch(current_token.type){
			case 'variable-declaraction':
				cursor.position++
				let next = tokens[cursor.position];
				if(next.type!="space"){
					throw 'You have to put a space after a variable declaraction.';
				}
				cursor.position++
				next = tokens[cursor.position];
				return new ExpressionVarDeclaration(next);
			case 'equal':
				if(tokens[cursor.position-1].type=="space" && tokens[cursor.position-2].type=="identifier"){
					cursor.position++
					let next = tokens[cursor.position];
					if(next.type!="space"){
						throw 'You have to put a space after a variable assignation.';
					}
					cursor.position++
					next = tokens[cursor.position];
					return new ExpressionVarAssignation(tokens[cursor.position-4], next);	
				}else{
					throw 'You have to put a space after a variable declaraction.';
				}
				break;
		}
	}	
	
};