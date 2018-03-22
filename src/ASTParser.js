import Expression from "./Expression.js";
import ExpressionFactory from "./ExpressionFactory.js";

export default class ASTParser{
	constructor(){
		this.ast = new Expression('Body');
		this.last_exp= this.ast;
	}
	
	static parse(tokens){
		let instance = new ASTParser();
		for(let cursor={position: 0}; cursor.position < tokens.length; cursor.position++){
			let current_token = tokens[cursor.position];
			switch(current_token.type){
				case 'space':
				case 'line-break-r':
					break
				case 'line-break':
					break
				case 'if':
					cursor.position++;
					var next = tokens[cursor.position];
					current_token = next;
					if(next.type==="parenthesis-start"){
                        cursor.position++;
                        next = tokens[cursor.position];
                        current_token = next;
                        if(next.type==="variable"){
                            cursor.position++;
                            var next = tokens[cursor.position];
                            current_token = next;
							if(next.type==="equal"){
                                cursor.position++;
                                var next = tokens[cursor.position];
                                current_token = next;
                                if(next.type==="variable"){
                                    cursor.position++;
                                    var next = tokens[cursor.position];
                                    current_token = next;
                                    if(next.type==="parenthesis-end"){
                                    	console.log("Is an IF condition");
									}
								}
							}
						}
					}
					break;
				case 'function':
					cursor.position++;
					var next = tokens[cursor.position];
					current_token = next;
					if(next.type==="space"){
                        cursor.position++;
                        next = tokens[cursor.position];
                        current_token= next;
                        if(next.type==="identifier"){
                            cursor.position++;
                            next = tokens[cursor.position];
                            current_token= next;
                            if(next.type==="parenthesis-start"){
                                cursor.position++;
                                next = tokens[cursor.position];
                                current_token= next;
                                while(next.type==="variable"){
                                    cursor.position++;
                                    next = tokens[cursor.position];
                                    current_token= next;
                                    if(next.type==="virgule"){
                                        cursor.position++;
                                        next = tokens[cursor.position];
                                        current_token= next;
                                        if(next.type==="space"){
                                            cursor.position++;
                                            next = tokens[cursor.position];
                                            current_token= next;
                                        }
                                    }
                                }
                                if(next.type==="parenthesis-end"){
                                    console.log("Is a function");
                                }
                            }
                        }
					}
					break;
				case 'console-object':
					var next = tokens.shift();
					current_token= next;
					if(next.type=="point"){
						var expression = {
							type: 'ConsoleUseMethodeExpression',
							methode: '',
							arguments: [],
						}
						next = tokens.shift();
						current_token= next;
						if(next.type==="identifier"){
							expression.methode= next.value;
							next = tokens.shift();
							current_token= next;
							if(next.type==="parenthesis-start"){
								var isEnding= false;
								do{
									next= tokens.shift();
									current_token= next;
									switch(next.type){
										case 'object-string':
										case 'number':
										case 'number-float':
										case 'identifier':
											expression.arguments.push(next);	
											break;
										case 'parenthesis-end':
											isEnding= true;
											break
										case 'virgule':
											break;
										default:
											throw 'Error of using arguments';
									}
								}while(next.type!="parenthesis-end" && tokens.length > 0);
								if(!isEnding){
									throw 'You have to close parenthesis whene you use method.';
								}else{
									AST.body.push(expression);
								}
							}else{
								throw 'You have to use parenthesis to use method.';
							}
							
						}else{
							throw 'You have to define a identifier for a variable.';
						}
					}
					break;
				case 'add':
                    var next = tokens[cursor.position+1];
                    var prev = tokens[cursor.position-1];
                    var vari = tokens[cursor.position-5];
                    console.log(vari);
                    console.log(next);
                    console.log(prev);
                    if(prev.type=="object-string" && next.type=="object-string"){

					}
					else if(prev.type=="number" && next.type=="number"){

                    }
                    else if(prev.type=="number-float" && next.type=="number-float"){

                    }
                    else{
                    	throw 'Error calcul'
					}
					break;
				case 'point':
					break;
				case 'script-php-start':
					break;
				case 'script-php-end':
					break;
				case 'view-command':
					break;
				case 'object-string':
					break;
				case 'parenthesis-start':
					break;
				case 'parenthesis-end':
					break;
                case 'accolade-start':
                    break;
                case 'accolade-end':
                    break;
				case 'instruction-end':
					break;
				case 'variable':
					break;
				case 'identifier':
					continue;
				default:
					let exp = ExpressionFactory.create(cursor, tokens);
					if(exp){
						instance.addExpToTree(exp);
					}else{
						throw `grammar error`
					}
					break;
			}
		}
		return instance.ast;
	}
	
	addExpToTree(exp){
		switch(exp.type){
			case 'ExpressionVarDeclaration':
			case 'ExpressionVarAssignation':
				this.last_exp.addChild(exp);
				break;
		}
	}
	
	
}