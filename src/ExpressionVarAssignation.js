import Expression from "./Expression.js";

export default class ExpressionVarAssignation extends Expression{
	
	constructor(token_identifier, token_value){
		if(token_identifier.type!="variable"){
			throw 'You have to put an valid identifier for a variable assignation';
		}
		super("ExpressionVarAssignation");
		this.variableName= token_identifier.value;
		switch(token_value.type){
			case 'variable':
			case 'object-string':
                this.variableValue= token_value.value;
                break;
			case 'number':
                this.variableValue= token_value.value;
                break;
			case 'number-float':
				this.variableValue= token_value.value;
				break;
			default:
				throw 'You have to assigne a know type to variable ';
		}
	}
}

